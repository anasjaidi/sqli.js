"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const CustomElement_1 = require("../../lib/CustomElement");
class Input extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('input'), conf);
    }
}
exports.Input = Input;
