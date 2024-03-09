"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H1 = void 0;
const CustomElement_1 = require("../../lib/CustomElement");
class H1 extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('h1'), conf);
    }
}
exports.H1 = H1;
