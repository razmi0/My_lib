type GT = any[] | any;
/**
 * Recursively remove  falsy values from any types of data, including nested objects and arrays. It also removes empty strings and trims strings. It returns false if the data is empty after removing falsy values.
 * @param data Any type of data
 * @param deleteFlag If true, it will delete the [key : value] if the value is falsy. If false, it will only replace the falsy value by false.
 * @returns data | false | 0
 */
export declare function removeFalsy(data: GT | GT[], deleteFlag: boolean): GT | GT[] | false;
export {};
//# sourceMappingURL=lib.d.ts.map