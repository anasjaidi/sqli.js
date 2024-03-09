"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const CustomElement_1 = require("../../lib/CustomElement");
class Form extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('form'), conf);
    }
}
exports.Form = Form;
