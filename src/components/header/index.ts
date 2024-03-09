import { CustomElement, ElementConfig } from "../../lib/CustomElement";


export class Header extends CustomElement<HTMLElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('header'), conf);
  }
}
