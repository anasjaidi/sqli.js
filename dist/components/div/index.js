"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Div = void 0;
const CustomElement_1 = require("../../lib/CustomElement");
class Div extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('div'), conf);
    }
}
exports.Div = Div;
