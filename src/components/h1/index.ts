import { CustomElement, ElementConfig } from "../../lib/CustomElement";

export class H1 extends CustomElement<HTMLElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('h1'), conf);
  }
}
