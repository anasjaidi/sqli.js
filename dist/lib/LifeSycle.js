"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LifeSycle = void 0;
class LifeSycle {
    ___destroy__cb_1;
    __destroyement__tasks_ = [];
    __toDestroy = [];
    _element;
    _init(conf) {
        this._init = this._init.bind(this, conf);
        this.___destroy__cb_1 = this.init();
        return this;
    }
    destroy() {
        this.__to__global_detach.forEach(id => this.stateSubscribe(id));
        this.__toDestroy.reverse().forEach((d) => d.destroy());
        this.___destroy__cb_1 && this.___destroy__cb_1();
        this._element.remove();
        this.__toDestroy = [];
    }
}
exports.LifeSycle = LifeSycle;
