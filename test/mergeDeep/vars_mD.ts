// Contain all the variables used to test syncTimeTest
// path : test/vars_mD.ts
//--

// ---------------------------------------------//
import * as test from "../removeFalsy/vars_rF.js";
// ---------------------------------------------//

export type NestedObj<K> = {
  [attr in keyof K]?: K[attr] extends object ? NestedObj<K[attr]> : K[attr];
};
export type Giver = {
  a: number;
  b: number;
  c: {
    ca: number;
    cb: number;
    cc: {
      cca: number;
      ccb: number;
      ccc: number;
    };
  };
  d: string;
  e: number[];
  f: boolean;
  g: (number | number[])[];
  h: [{ ha: number }, { hb: number }, { hc: number }];
};

export const model: Giver = {
  a: 1,
  b: 2,
  c: {
    ca: 1,
    cb: 2,
    cc: {
      cca: 1,
      ccb: 2,
      ccc: 3,
    },
  },
  d: "string",
  e: [1, 2, 3],
  f: true,
  g: [1, 2, 3, [41, 42, 43]],
  h: [{ ha: 1 }, { hb: 2 }, { hc: 4 }],
};
export const user: NestedObj<Giver> = {
  a: 1,
  b: 2,
  c: {
    cb: 2,
    cc: {
      cca: 1,
      ccb: 52,
      ccc: 3,
    },
  },
};

export const defObj1 = {
  defaultKey: "Hello",
  addedKey: "world!!",
};
export const userObj1 = {
  addedKey: "world!"
};

export { test };
