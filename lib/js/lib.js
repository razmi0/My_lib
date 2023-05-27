// Lib functions file
// --
/**
 * Recursively remove  falsy values from any types of data, including nested objects and arrays. It also removes empty strings and trims strings. It returns false if the data is empty after removing falsy values.
 * @param data Any type of data
 * @param deleteFlag If true, it will delete the [key : value] if the value is falsy. If false, it will only replace the falsy value by false.
 * @returns data | false | 0
 */
export function removeFalsy(data = false, deleteFlag = false) {
    if (Array.isArray(data)) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] === undefined || data[i] === null || data[i] === "") {
                data.splice(i, 1);
                i--;
            }
            if (typeof data[i] === "string") {
                data[i] = data[i].trim();
                if (data[i] === "") {
                    data.splice(i, 1);
                    i--;
                }
            }
            if (typeof data[i] === "object" || Array.isArray(data[i])) {
                removeFalsy(data[i], deleteFlag);
            }
        }
        return data.length ? data : false;
    }
    if (typeof data === "object" && data !== null) {
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === "string") {
                data[key] = value.trim();
            }
            if (value === undefined || value === null || value === "") {
                deleteFlag ? delete data[key] : (data[key] = false);
            }
            if (typeof value === "object" || Array.isArray(value)) {
                removeFalsy(value, deleteFlag);
            }
        }
        return Object.keys(data).length ? data : false;
    }
    if (typeof data === "string") {
        data = data.trim();
    }
    return data || 0 ? data : false;
}
/**
 * Sync Function to get the execution time of a function on console
 * @Sync
 * @param {CallableFunction} fc Function to be executed
 * @param {any | any[]} parameters Parameters of the function to be executed
 * @returns {Object}  return a summary object of the execution
 */
export function syncTime(fc, parameters) {
    let flag = false;
    let returnedValue = null;
    if (parameters.length > 0) {
        flag = true;
    }
    try {
        /** START MEASURE  */
        const t1 = performance.now();
        flag ? (returnedValue = fc(...parameters)) : (returnedValue = fc());
        const t2 = performance.now();
        /** END MEASURE  */
        if (!returnedValue) {
            returnedValue = "No return value";
        }
        return {
            success: true,
            execution: `${fc.name}${flag ? " with " + parameters.length + " parameters" : "()"}`,
            parameters: parameters,
            return: returnedValue,
            time: `${(t2 - t1).toFixed(4)} ms`,
        };
    }
    catch (error) {
        console.error(error);
        return { success: false };
    }
}
//# sourceMappingURL=lib.js.map