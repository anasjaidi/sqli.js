"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeSycle = void 0;
const Destroyable_1 = require("./Destroyable");
/**
 * Abstract class for objects with lifecycle methods, extending `Destroyable`.
 */
class LifeSycle extends Destroyable_1.Destroyable {
    /**
     * Empty method called when the object is about to be destroyed.
     */
    onDestroy() { }
    /**
     * Empty method called after the object has been destroyed.
     */
    onDestroyed() { }
    /**
     * Empty method called when the object is about to be rendered.
     */
    onRender() { }
    /**
     * Empty method called after the object has been rendered.
     */
    onRenderd() { }
}
exports.LifeSycle = LifeSycle;
