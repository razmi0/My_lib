// Contain all the variables used to test syncTimeTest
// path : test/vars_sTT.ts
//--
// ---------------------------------------------//
import { removeFalsy } from "../../lib.js";
function noParamNoReturn() {
    console.log("noParamNoReturn exec : " + 10 * 10); // ok
}
function noParamReturn() {
    return "noParamReturn exec : " + 10 * 10; // ok
}
function oneParamNoReturn(param) {
    console.log("OneParamNoReturn exec : " + param * param); // ok
}
function oneParamReturn(param) {
    return "OneParamNoReturn exec : " + param * param; // ok
}
function twoParamNoReturn(param, param2) {
    console.log("TwoParamNoReturn exec : " + param * param2);
}
function twoParamReturn(param, param2) {
    return "TwoParamNoReturn exec : " + param * param2;
}
function sum(a, b) {
    const c = a + b;
}
const data_1 = {
    a: null,
    b: -1,
    c: " ",
    d: "",
    e: undefined,
    f: "    string    ",
    g: 0,
    h: {
        x: "string",
        xx: undefined,
        xxx: null,
        xxxx: 0,
        xxxxx: " ",
        xxxxxx: "",
        xxxxxxx: "    string    ",
        xxxxxxxx: 1,
    },
    i: [
        null,
        " ",
        "",
        0,
        undefined,
        1,
        "string",
        "    string    ",
        {
            x: "string",
            xx: undefined,
            xxx: null,
            xxxx: 0,
            xxxxx: " ",
            xxxxxx: "",
            xxxxxxx: "    string    ",
            xxxxxxxx: 1,
        },
        [null, " ", "", 0, undefined, 1, "string", "    string    ", -1],
    ],
};
const data_2 = 456;
export { sum, removeFalsy, noParamNoReturn, noParamReturn, oneParamNoReturn, oneParamReturn, twoParamNoReturn, twoParamReturn, data_1, data_2, };
//# sourceMappingURL=vars_sT.js.map