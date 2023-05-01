// Contain all the variables used in the test
// path : test/var.ts
// --

//---------------------------------------------//
const object = {
    a: null,
    b: -1,
    c: " ",
    d: "",
    e: undefined,
    f: "    string    ",
    g: 0,
    h: {
      bla: "string",
      blabla: undefined,
      blablabla: null,
      blablablabla: 0,
      blablablablabla: " ",
      blablablablablabla: "",
      blablablablablablabla: "    string    ",
      blablablablablablablabla: 1,
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
        bla: "string",
        blabla: undefined,
        blablabla: null,
        blablablabla: 0,
        blablablablabla: " ",
        blablablablablabla: "",
        blablablablablablabla: "    string    ",
        blablablablablablablabla: 1,
      },
      [null, " ", "", 0, undefined, 1, "string", "    string    ", -1],
    ],
  },
  array = [
    null,
    " ",
    "",
    0,
    undefined,
    1,
    false,
    true,
    [true, false, true, false, false],
    "string",
    "    string    ",
    object,
    [null, " ", "", 0, undefined, 1, "string", "    string    ", -1],
  ],
  string = "string",
  nullString = "",
  nonTrimmedString = "    string    ",
  int = 12,
  nullInt = 0,
  bool = true,
  nullBool = false,
  boolArray = [true, false];
//---------------------------------------------//


export { object, array, string, nullString, nonTrimmedString, int, nullInt, bool, nullBool, boolArray };