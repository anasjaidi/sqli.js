import { Component } from './Component';
import { Initializeble } from './Initializeble';
/**
 * Interface for objects that can be destroyed.
 */
export interface IDestroyable {
    destroy: () => void;
}
/**
 * Abstract class for objects that can be destroyed, extending from `Initializeble`.
 */
export declare abstract class Destroyable extends Initializeble implements IDestroyable {
    protected __toDestroy: Component[];
    protected _element: HTMLElement;
    /**
     * Destroys the object by calling the `destroy` method on all components to be destroyed
     * and removing the element from the DOM.
     */
    destroy(): void;
}
