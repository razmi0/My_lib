// Contain the tests execution for syncTestTime
// Path: test/sTT.ts
// TODO : add a deepCopyObj function to lib.ts, and use it to copy parameters in syncTime function if needed
//---------------------------------------------//
import { syncTime } from "../../lib.js";
import * as test from "./vars_sT.js";
//---------------------------------------------//
// console.log(syncTime(test.removeFalsy, [test.data_1,true]));
// console.log("noParamNoReturn");
// console.log(syncTime(test.noParamNoReturn, []));
// console.log("noParamReturn");
// console.log(syncTime(test.noParamReturn, []));
// console.log("oneParamNoReturn");
// console.log(syncTime(test.oneParamNoReturn, [10]));
// console.log("oneParamReturn");
// console.log(syncTime(test.oneParamReturn, [10]));
// console.log("twoParamNoReturn");
// console.log(syncTime(test.twoParamNoReturn, [10, 10]));
// console.log("twoParamReturn");
// console.log(syncTime(test.twoParamReturn, [10, 10]));
const summary = syncTime(test.sum, [5, 5]);
console.log(summary);
//# sourceMappingURL=sT.js.map