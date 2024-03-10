import { ElementConfig } from '../types';
import { CustomElement } from './CustomElement';
export declare class Button extends CustomElement<HTMLButtonElement> {
    constructor(conf?: ElementConfig);
}
export declare class Div extends CustomElement<HTMLDivElement> {
    constructor(conf?: ElementConfig);
}
export declare class Form extends CustomElement<HTMLFormElement> {
    constructor(conf?: ElementConfig);
}
export declare class Fragment {
    private _f;
    constructor();
    _render(): DocumentFragment;
    append(...elements: HTMLElement[]): DocumentFragment;
}
export declare class H1 extends CustomElement<HTMLElement> {
    constructor(conf?: ElementConfig);
}
export declare class Header extends CustomElement<HTMLElement> {
    constructor(conf?: ElementConfig);
}
export declare class Input extends CustomElement<HTMLInputElement> {
    constructor(conf?: ElementConfig);
}
export declare class Label extends CustomElement<HTMLLabelElement> {
    constructor(conf?: ElementConfig);
}
