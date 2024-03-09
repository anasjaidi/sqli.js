"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const CustomElement_1 = require("../../lib/CustomElement");
class Header extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('header'), conf);
    }
}
exports.Header = Header;
