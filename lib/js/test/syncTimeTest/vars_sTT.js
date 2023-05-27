// Contain all the variables used to test syncTimeTest
// path : test/vars_sTT.ts
//--
// ---------------------------------------------//
import { removeFalsy } from "../../lib.js";
const data = {
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
export { removeFalsy, data_2 };
//# sourceMappingURL=vars_sTT.js.map