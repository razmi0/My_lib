// Contain the tests execution for removeFalsy
// Path: test/rF.ts

//---------------------------------------------//

import { removeFalsy } from "../../lib.js";
import * as test from "./vars_rF.js";

//---------------------------------------------//
const t1                     = performance.now();
const testedNull             = removeFalsy(test.nullVar, false);
const testedUndefined        = removeFalsy(test.und, false);
const testedArray            = removeFalsy(test.array, false);
const testedObject           = removeFalsy(test.object, false);
const testedString           = removeFalsy(test.string, false);
const testedSpacedString     = removeFalsy(test.spacedString, false);
const testedNullString       = removeFalsy(test.nullString, false);
const testednonTrimmedString = removeFalsy(test.nonTrimmedString, false);
const testedInt              = removeFalsy(test.int, false);
const testedNullInt          = removeFalsy(test.nullInt, false);
const testedBool             = removeFalsy(test.bool, false);
const testedNullBool         = removeFalsy(test.nullBool, false);
const testedBoolArray        = removeFalsy(test.boolArray, false);
const t2                     = performance.now();
const time                   = ((t2 - t1)/12).toFixed(4);
//---------------------------------------------//
console.log('testedNull');
console.log(testedNull);
console.log('testedUndefined');
console.log(testedUndefined);
console.log('testedArray');
console.log(testedArray);
console.log('testedObject');
console.log(testedObject);
console.log('testedString');
console.log(testedString);
console.log('testedSpacedString');
console.log(testedSpacedString);
console.log('testedNullString');
console.log(testedNullString);
console.log('testednonTrimmedString');
console.log(testednonTrimmedString);
console.log('testedInt');
console.log(testedInt);
console.log('testedNullInt');
console.log(testedNullInt);
console.log('testedBool');
console.log(testedBool);
console.log('testedNullBool');
console.log(testedNullBool);
console.log('testedBoolArray');
console.log(testedBoolArray);
console.log(`Execution time: ${time}s`);

//---------------------------------------------//
