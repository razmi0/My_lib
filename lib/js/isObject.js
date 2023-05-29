// isObject Function
// --
//--------------------------------------------------------------//
/**
 * Evaluate if item is an object.
 * @param { * } item
 * @returns { boolean }
 */
export function isObject(item) {
    return item && typeof item === "object" && !Array.isArray(item);
}
//--------------------------------------------------------------//
//# sourceMappingURL=isObject.js.map