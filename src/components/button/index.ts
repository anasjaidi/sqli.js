import { CustomElement, ElementConfig } from "../../lib/CustomElement";

export class Button extends CustomElement<HTMLButtonElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('button'), conf);
  }
}
