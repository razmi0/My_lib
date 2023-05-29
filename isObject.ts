// isObject Function
// --


//--------------------------------------------------------------//

/**
 * Evaluate if item is an object.
 * @param { * } item
 * @returns { boolean }
 */

export function isObject(item: any): boolean {
    return item && typeof item === "object" && !Array.isArray(item);
  }
//--------------------------------------------------------------//