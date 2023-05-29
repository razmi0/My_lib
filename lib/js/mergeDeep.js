// mergeDeep Function
// --
import { isObject } from "./isObject.js";
/**
 * Recursively merge the default options object until all the user options object is merged
 *                and return the merged object.
 * @param { Object } model
 * @param  { ...Object } user
 * @returns { Object } merged object
 */
export function mergeDeep(model, ...user) {
    const source = user.shift(); // get the first object from the array
    if (isObject(model) && isObject(source)) {
        // if both are objects
        for (const key in source) {
            // iterate over the source object
            if (isObject(source[key])) {
                // if the value at key is an object
                if (!model[key]) {
                    // if the key is not present in the default object
                    Object.assign(model, { [key]: {} }); // add the key to the default object
                }
                mergeDeep(model[key], source[key]); // recursively call the function
            }
            else {
                Object.assign(model, { [key]: source[key] }); // if the value at key is not an object, add the key and value to the default object
            }
        }
    }
    return model;
}
//--------------------------------------------------------------//
//# sourceMappingURL=mergeDeep.js.map