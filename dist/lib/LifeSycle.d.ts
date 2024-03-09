import { Destroyable } from "./Destroyable";
/**
 * Interface for objects with lifecycle methods.
 */
export interface ILifeSycle {
    /**
     * Method called when the object is about to be destroyed.
     */
    onDestroy: () => void;
    /**
     * Method called after the object has been destroyed.
     */
    onDestroyed: () => void;
    /**
     * Method called when the object is about to be rendered.
     */
    onRender: () => void;
    /**
     * Method called after the object has been rendered.
     */
    onRenderd: () => void;
}
/**
 * Abstract class for objects with lifecycle methods, extending `Destroyable`.
 */
export declare abstract class LifeSycle extends Destroyable {
    /**
     * Empty method called when the object is about to be destroyed.
     */
    onDestroy(): void;
    /**
     * Empty method called after the object has been destroyed.
     */
    onDestroyed(): void;
    /**
     * Empty method called when the object is about to be rendered.
     */
    onRender(): void;
    /**
     * Empty method called after the object has been rendered.
     */
    onRenderd(): void;
}
