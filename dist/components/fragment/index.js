"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fragment = void 0;
class Fragment {
    constructor() {
        this._f = document.createDocumentFragment();
    }
    render() {
        return this._f;
    }
    append(...elements) {
        elements.forEach((e) => this._f.appendChild(e));
        return this._f;
    }
}
exports.Fragment = Fragment;
