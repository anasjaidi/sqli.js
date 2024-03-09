"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Initializeble = void 0;
/**
 * Abstract class for objects that can be initialized, implementing `IInitializeble`.
 */
class Initializeble {
    /**
     * Placeholder render method that can be overridden by subclasses.
     * @param props The properties for rendering.
     */
    render(props) { }
    /**
     * Initializes the object by binding the render method and calling the internal _init method.
     * @param conf Optional configuration for initialization.
     * @returns The initialized object.
     */
    init(conf) {
        this.init = this.init.bind(this, conf);
        this._init();
        return this;
    }
}
exports.Initializeble = Initializeble;
