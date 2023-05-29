type T = {
    [key: string]: any;
};
type U = {
    [key: string]: any;
};
type MO<T, U> = T & Omit<U, keyof T>;
/**
 * Recursively merge the default options object until all the user options object is merged
 *                and return the merged object.
 * @param { Object } model
 * @param  { ...Object } user
 * @returns { Object } merged object
 */
export declare function mergeDeep(model: T, ...user: U[]): MO<T, U>;
export {};
//# sourceMappingURL=mergeDeep.d.ts.map