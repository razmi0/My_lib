type RF = any[] | any;
/**
 * Recursively remove  falsy values from any types of data, including nested objects and arrays. It also removes empty strings and trims strings. It returns false if the data is empty after removing falsy values.
 * @param {*} data Any type of data
 * @param {boolean} deleteFlag If true, it will delete the [key : value] if the value is falsy. If false, it will only replace the falsy value by false.
 * @returns { * | false }
 */
export declare function removeFalsy(data?: RF | RF[], deleteFlag?: boolean): RF | RF[] | false;
export {};
//# sourceMappingURL=removeFalsy.d.ts.map