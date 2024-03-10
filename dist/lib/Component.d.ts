import { IProps } from '../types';
import { Statble } from './Statble';
/**
 * Interface for components with render functions.
 */
interface IComponent {
    render: (props?: IProps) => any;
    _render: (props?: IProps) => HTMLElement;
}
/**
 * Abstract class for components, extending from `Statble`.
 */
export declare abstract class Component extends Statble implements IComponent {
    protected __position: number;
    private __parent__;
    get position(): number;
    set position(idx: number);
    /**
     * Abstract method to be implemented by child classes.
     */
    abstract render(props?: IProps): any;
    /**
     * Recursively appends child elements to the parent element.
     */
    private treefiy;
    constructor(props?: IProps);
    /**
     * Renders the component.
     */
    _render(props?: IProps): HTMLElement;
    hasChild(ctx: Component): boolean;
}
export {};
