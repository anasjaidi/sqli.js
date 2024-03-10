"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = exports.Input = exports.Header = exports.H1 = exports.Fragment = exports.Form = exports.Div = exports.Button = void 0;
const CustomElement_1 = require("./CustomElement");
class Button extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('button'), conf);
    }
}
exports.Button = Button;
class Div extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('div'), conf);
    }
}
exports.Div = Div;
class Form extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('form'), conf);
    }
}
exports.Form = Form;
class Fragment {
    _f;
    constructor() {
        this._f = document.createDocumentFragment();
    }
    _render() {
        return this._f;
    }
    append(...elements) {
        elements.forEach((e) => this._f.appendChild(e));
        return this._f;
    }
}
exports.Fragment = Fragment;
class H1 extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('h1'), conf);
    }
}
exports.H1 = H1;
class Header extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('header'), conf);
    }
}
exports.Header = Header;
class Input extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('input'), conf);
    }
}
exports.Input = Input;
class Label extends CustomElement_1.CustomElement {
    constructor(conf) {
        super(document.createElement('label'), conf);
    }
}
exports.Label = Label;
