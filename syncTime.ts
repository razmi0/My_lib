// syncTime function
// --


//--------------------------------------------------------------//


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
export function syncTime(fc: Function, parameters: any[]): Summary {
  let flag = false;
  let returnedValue : null | ReturnType<any> = null;
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
      execution: `${fc.name}${
        flag ? " with " + parameters.length + " parameters" : "()"
      }`,
      parameters: parameters,
      return: returnedValue,
      time: `${(t2 - t1).toFixed(4)} ms`,
    };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}

//--------------------------------------------------------------//
