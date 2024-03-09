
import "./lib/__html"

declare global {
  interface HTMLElement {
    appendChildAtNth(element: HTMLElement, idx: number): void;
  }
}
HTMLElement.prototype.appendChildAtNth

export function __init() {
  const body = document.querySelector('body');
}

__init();
