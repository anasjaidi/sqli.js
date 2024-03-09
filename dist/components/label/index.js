"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const CustomElement_1 = require("../../lib/CustomElement");
class Label extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('label'), conf);
    }
}
exports.Label = Label;
