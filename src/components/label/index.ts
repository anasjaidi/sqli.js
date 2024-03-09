import { CustomElement, ElementConfig } from "../../lib/CustomElement";


export class Label extends CustomElement<HTMLLabelElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('label'), conf);
  }
}
