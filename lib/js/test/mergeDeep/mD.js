// Contain the tests execution for mergeDeepObj
// Path: test/mD.ts
//---------------------------------------------//
import { mergeDeep } from "../../lib_module.js";
import { model, user } from "./vars_mD.js";
const merged = mergeDeep(model, user);
//
console.log(merged);
//
console.log(`merged model : ${merged === model}`);
console.log(`merged Object.is model : ${Object.is(merged, model)}`);
console.log(`merged getPrototypeOf model : ${Object.getPrototypeOf(merged) === Object.getPrototypeOf(model)}`);
//
console.log(`merged user : ${merged === user}`);
console.log(`merged Object.is user : ${Object.is(merged, user)}`);
console.log(`merged getPrototypeOf user : ${Object.getPrototypeOf(merged) === Object.getPrototypeOf(user)}`);
//
console.log(`model user : ${model === user}`);
console.log(`model Object.is user : ${Object.is(model, user)}`);
console.log(`model getPrototypeOf user : ${Object.getPrototypeOf(model) === Object.getPrototypeOf(user)}`);
//
//# sourceMappingURL=mD.js.map