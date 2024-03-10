"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeSycle = void 0;
class LifeSycle {
    ___destroy__cb_1;
    __toDestroy = [];
    _element;
    _init(conf) {
        this._init = this._init.bind(this, conf);
        this.___destroy__cb_1 = this.init();
        return this;
    }
    destroy() {
        'onDestroy' in this &&
            typeof this.onDestroy === 'function' &&
            this.onDestroy();
        this.__toDestroy.reverse().forEach((d) => d.destroy());
        this.___destroy__cb_1 && this.___destroy__cb_1();
        this._element.remove();
        this.__toDestroy = [];
        'onDestroyed' in this &&
            typeof this.onDestroyed === 'function' &&
            this.onDestroyed();
    }
}
exports.LifeSycle = LifeSycle;
