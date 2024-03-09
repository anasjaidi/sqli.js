import { CustomElement, ElementConfig } from "../../lib/CustomElement";


export class Div extends CustomElement<HTMLDivElement> {
  constructor(conf?: ElementConfig) {
    super(document.createElement('div'), conf);
  }
}
