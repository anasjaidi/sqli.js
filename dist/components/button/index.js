"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const CustomElement_1 = require("../../lib/CustomElement");
class Button extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('button'), conf);
    }
}
exports.Button = Button;
