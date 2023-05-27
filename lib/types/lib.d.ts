type RF = any[] | any;
type STT = {
    success: boolean;
    execution?: string;
    parameters?: any[];
    return?: any;
    time?: string;
};
/**
 * Recursively remove  falsy values from any types of data, including nested objects and arrays. It also removes empty strings and trims strings. It returns false if the data is empty after removing falsy values.
 * @param data Any type of data
 * @param deleteFlag If true, it will delete the [key : value] if the value is falsy. If false, it will only replace the falsy value by false.
 * @returns data | false | 0
 */
export declare function removeFalsy(data?: RF | RF[], deleteFlag?: boolean): RF | RF[] | false;
/**
 * Sync Function to get the execution time of a function on console
 * @Sync
 * @param {CallableFunction} fc Function to be executed
 * @param {any | any[]} parameters Parameters of the function to be executed
 * @returns {Object}  return a summary object of the execution
 */
export declare function syncTime(fc: CallableFunction, parameters: any[]): STT;
export {};
//# sourceMappingURL=lib.d.ts.map