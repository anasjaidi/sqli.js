"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const CustomElement_1 = require("./CustomElement");
const Statble_1 = require("./Statble");
/**
 * Abstract class for components, extending from `Statble`.
 */
class Component extends Statble_1.Statble {
    // protected _element: HTMLElement;
    __position = 0;
    __parent__;
    get position() {
        return this.__position;
    }
    set position(idx) {
        this.__position = idx;
    }
    /**
     * Recursively appends child elements to the parent element.
     */
    treefiy(element, parent) {
        if (Array.isArray(element)) {
            element.forEach((el, idx) => {
                el.position = idx;
                this.treefiy(el, parent);
            });
        }
        else if ('parent' in element && 'childs' in element) {
            if (!Array.isArray(element['childs'])) {
                throw new Error();
            }
        }
        else if (element instanceof Component) {
            this.__toDestroy.push(element);
            element.__parent__ = parent;
            element._init()._render();
        }
        else if (element instanceof CustomElement_1.CustomElement) {
            this.__toDestroy.push(element);
            parent.appendChildAtNth(element._render(), element.position);
        }
    }
    constructor(props) {
        super();
        this._render = this._render.bind(this, props);
    }
    /**
     * Renders the component.
     */
    _render(props) {
        this._render = this._render.bind(this, props);
        const tree = this.render(props);
        '_init' in tree.parent && tree.parent._init();
        this._element =
            (tree.parent._render && tree.parent._render()) ||
                tree.parent;
        tree.childs && tree.childs.length
            ? this.treefiy(tree.childs, this._element)
            : null;
        (props?.parent || this.__parent__)?.appendChildAtNth(this._element, this.position);
        return this._element;
    }
    hasChild(ctx) {
        return this.__toDestroy.includes(ctx);
    }
}
exports.Component = Component;
