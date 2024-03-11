"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exp = {};
function defineStyles(idenitifier, cb) {
    Object.defineProperty(exp, `_${idenitifier}`, {
        enumerable: false,
        writable: false,
        configurable: false,
        value: cb,
    });
}
exports.default = exp;
// module js
