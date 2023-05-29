import { removeFalsy } from "../../lib_module.js";
declare function noParamNoReturn(): void;
declare function noParamReturn(): string;
declare function oneParamNoReturn(param: number): void;
declare function oneParamReturn(param: number): string;
declare function twoParamNoReturn(param: number, param2: number): void;
declare function twoParamReturn(param: number, param2: number): string;
declare function sum(a: number, b: number): void;
declare const data_1: {
    a: null;
    b: number;
    c: string;
    d: string;
    e: undefined;
    f: string;
    g: number;
    h: {
        x: string;
        xx: undefined;
        xxx: null;
        xxxx: number;
        xxxxx: string;
        xxxxxx: string;
        xxxxxxx: string;
        xxxxxxxx: number;
    };
    i: (string | number | (string | number | null | undefined)[] | {
        x: string;
        xx: undefined;
        xxx: null;
        xxxx: number;
        xxxxx: string;
        xxxxxx: string;
        xxxxxxx: string;
        xxxxxxxx: number;
    } | null | undefined)[];
};
declare const data_2 = 456;
export { sum, removeFalsy, noParamNoReturn, noParamReturn, oneParamNoReturn, oneParamReturn, twoParamNoReturn, twoParamReturn, data_1, data_2, };
//# sourceMappingURL=vars_sT.d.ts.map