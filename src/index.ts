

import './lib/__html';


declare global {
  interface HTMLElement {
    appendChildAtNth(element: HTMLElement, idx: number): void;
  }
}



export * from './lib'