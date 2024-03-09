import { CustomElement, ElementConfig } from "../../lib/CustomElement";

export class Form extends CustomElement<HTMLFormElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('form'), conf);
  }
}
