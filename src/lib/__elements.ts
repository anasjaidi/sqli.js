import { ElementConfig } from '../types';
import { CustomElement } from './CustomElement';

export class Button extends CustomElement<HTMLButtonElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('button'), conf);
  }
}

export class Div extends CustomElement<HTMLDivElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('div'), conf);
  }
}

export class Form extends CustomElement<HTMLFormElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('form'), conf);
  }
}

export class Fragment {
  private _f: DocumentFragment;
  constructor() {
    this._f = document.createDocumentFragment();
  }

  render() {
    return this._f;
  }

  append(...elements: HTMLElement[]) {
    elements.forEach((e) => this._f.appendChild(e));
    return this._f;
  }
}

export class H1 extends CustomElement<HTMLElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('h1'), conf);
  }
}

export class Header extends CustomElement<HTMLElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('header'), conf);
  }
}

export class Input extends CustomElement<HTMLInputElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('input'), conf);
  }
}

export class Label extends CustomElement<HTMLLabelElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('label'), conf);
  }
}
