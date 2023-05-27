// Lib functions file
// --

type GT = any[] | any;

/**
 * Recursively remove  falsy values from any types of data, including nested objects and arrays. It also removes empty strings and trims strings. It returns false if the data is empty after removing falsy values.
 * @param data Any type of data
 * @param deleteFlag If true, it will delete the [key : value] if the value is falsy. If false, it will only replace the falsy value by false.
 * @returns data | false | 0
 */
export function removeFalsy(data: GT | GT[], deleteFlag : boolean): GT | GT[] | false {
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
        deleteFlag ? delete data[key] : data[key] = false;
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
