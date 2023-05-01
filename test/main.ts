// Contain the tests execution for demonstration
// Path: test/main.ts

//---------------------------------------------//

import { removeFalsy } from "../lib/lib";
import * as testedVar from "./var";

//---------------------------------------------//

const testedArray            = removeFalsy(testedVar.array),
      testedObject           = removeFalsy(testedVar.object),
      testedString           = removeFalsy(testedVar.string),
      testedNullString       = removeFalsy(testedVar.nullString),
      testednonTrimmedString = removeFalsy(testedVar.nonTrimmedString),
      testedInt              = removeFalsy(testedVar.int),
      testedNullInt          = removeFalsy(testedVar.nullInt),
      testedBool             = removeFalsy(testedVar.bool),
      testedNullBool         = removeFalsy(testedVar.nullBool),
      testedBoolArray        = removeFalsy(testedVar.boolArray);

//---------------------------------------------//

console.log(testedArray);
console.log(testedObject);
console.log(testedString);
console.log(testedNullString);
console.log(testednonTrimmedString);
console.log(testedInt);
console.log(testedNullInt);
console.log(testedBool);
console.log(testedNullBool);
console.log(testedBoolArray);

//---------------------------------------------//