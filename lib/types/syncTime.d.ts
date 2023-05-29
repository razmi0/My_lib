type Summary = {
    success: boolean;
    execution?: string;
    parameters?: any[];
    return?: any;
    time?: string;
};
/**
 * Sync Function to get the execution time of a function on console
 * @Sync
 * @param { Function } fc Function to be executed
 * @param { * } parameters Parameters of the function to be executed
 * @returns { Object }  Summary return a summary object of the execution
 */
export declare function syncTime(fc: Function, parameters: any[]): Summary;
export {};
//# sourceMappingURL=syncTime.d.ts.map