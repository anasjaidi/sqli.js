import { CustomElement, ElementConfig } from "../../lib/CustomElement";


export class Input extends CustomElement<HTMLInputElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('input'), conf);
  }
}
