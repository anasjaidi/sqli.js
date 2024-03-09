import { IProps } from '../types';
import { Statble } from './Statble';
/**
 * Interface for components with render functions.
 */
interface IComponent {
    render: (props?: IProps) => void;
    _render: (props?: IProps) => any;
}
/**
 * Abstract class for components, extending from `Statble`.
 */
export declare abstract class Component extends Statble implements IComponent {
    protected _element: HTMLElement;
    protected __position: number;
    get position(): number;
    set position(idx: number);
    /**
     * Abstract method to be implemented by child classes.
     */
    abstract _render(props?: IProps): any;
    /**
     * Recursively appends child elements to the parent element.
     */
    private treefiy;
    /**
     * Renders the component.
     */
    render(props?: IProps): HTMLElement;
}
export {};
