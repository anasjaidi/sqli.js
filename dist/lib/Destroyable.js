"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destroyable = void 0;
const Initializeble_1 = require("./Initializeble");
/**
 * Abstract class for objects that can be destroyed, extending from `Initializeble`.
 */
class Destroyable extends Initializeble_1.Initializeble {
    constructor() {
        super(...arguments);
        this.__toDestroy = [];
    }
    /**
     * Destroys the object by calling the `destroy` method on all components to be destroyed
     * and removing the element from the DOM.
     */
    destroy() {
        this.__toDestroy.reverse().forEach((d) => d.destroy());
        this._element.remove();
        this.__toDestroy = [];
    }
}
exports.Destroyable = Destroyable;
