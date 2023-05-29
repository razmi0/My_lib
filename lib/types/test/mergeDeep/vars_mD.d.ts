import * as test from "../removeFalsy/vars_rF.js";
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
    h: [{
        ha: number;
    }, {
        hb: number;
    }, {
        hc: number;
    }];
};
export declare const model: Giver;
export declare const user: NestedObj<Giver>;
export declare const defObj1: {
    defaultKey: string;
    addedKey: string;
};
export declare const userObj1: {
    addedKey: string;
};
export { test };
//# sourceMappingURL=vars_mD.d.ts.map