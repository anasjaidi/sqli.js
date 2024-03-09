"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
const CustomElement_1 = require("./CustomElement");
const Statble_1 = require("./Statble");
/**
 * Abstract class for components, extending from `Statble`.
 */
class Component extends Statble_1.Statble {
    constructor() {
        super(...arguments);
        this.__position = 0;
    }
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
            element.render({ parent });
        }
        else if (element instanceof CustomElement_1.CustomElement) {
            parent.appendChildAtNth(element.render(), element.position);
        }
        // if (element instanceof HTMLElement) {
        //   if (element instanceof Component) {
        //     this.__toDestroy.push(element);
        //     element.render({ parent });
        //   } else {
        //     parent.appendChild(element);
        //   }
        // } else if (element['parent']) {
        //   if (!('childs' in element) || !Array.isArray(element['childs'])) {
        //     throw new Error('Parsing Error');
        //   }
        //   if (element.parent instanceof Component) {
        //     this.__toDestroy.push(element);
        //     element.render({ parent });
        //   }
        //   this.treefiy(element.childs, element.parent);
        // } else if (Array.isArray(element)) {
        //   element.forEach((d) => {
        //     if (d instanceof Component) {
        //       this.__toDestroy.push(d);
        //       d.render({ parent });
        //     } else {
        //       parent.appendChild(d);
        //     }
        //   });
        // }
    }
    /**
     * Renders the component.
     */
    render(props) {
        var _a;
        this.render = this.render.bind(this, props);
        this.onRender();
        const tree = this._render(props);
        console.log(props);
        this._element = tree.parent.render();
        tree.childs && tree.childs.length
            ? this.treefiy(tree.childs, this._element)
            : null;
        (_a = props === null || props === void 0 ? void 0 : props.parent) === null || _a === void 0 ? void 0 : _a.appendChildAtNth(this._element, this.position);
        this.onRenderd();
        return this._element;
    }
}
exports.Component = Component;
