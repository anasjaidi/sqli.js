import { Component } from './Component';
import { CustomElement } from './CustomElement';

export interface ILifeSycle {
  init: (conf?: any) => undefined | (() => void);

  _init: (conf?: any) => typeof this;

  destroy: () => void;
}

interface DestroyTask<T extends 'unsbscribe'> {
  __identifier: T;
  payload: T extends 'unsbscribe' ? {
    __state__identifier: string;
  } : {};
}

export abstract class LifeSycle implements ILifeSycle {
  protected ___destroy__cb_1: () => void;

  protected __destroyement__tasks_: DestroyTask<'unsbscribe'>[] = [];

  protected __toDestroy: (Component | CustomElement<HTMLElement>)[] = [];
  protected _element: HTMLElement;

  abstract render(props?: any): undefined | (() => void);

  _init(conf?: any) {
    this._init = this._init.bind(this, conf);
    this.___destroy__cb_1 = this.init();
    return this;
  }

  abstract init(conf?: any): undefined | (() => void);

  destroy(): void {

    (this as any).__to__global_detach.forEach(id => (this as any).stateSubscribe(id))

    this.__toDestroy.reverse().forEach((d) => d.destroy());

    this.___destroy__cb_1 && this.___destroy__cb_1();

    this._element.remove();

    this.__toDestroy = [];
  }
}
