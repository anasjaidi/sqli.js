export class Fragment {
  private _f: DocumentFragment;
  constructor() {
    this._f = document.createDocumentFragment();
  }

  render() {
    return this._f
  }

  append(...elements: HTMLElement[]) {
    elements.forEach((e) => this._f.appendChild(e));
    return this._f;
  }
}
