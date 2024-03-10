import { ElementConfig } from "../types";
/**
 * Represents a custom element wrapper that provides utility methods for managing an HTMLElement.
 * @template T The type of the wrapped HTMLElement.
 */
export declare class CustomElement<T extends HTMLElement> {
    private _component;
    private _eventListeners;
    protected __position: number;
    get position(): number;
    set position(idx: number);
    /**
     * Creates an instance of CustomElement.
     * @param component The HTMLElement to wrap.
     */
    constructor(component: T, conf?: ElementConfig);
    /**
     * Injects styles into the wrapped HTMLElement.
     * @param styles The styles to inject.
     * @returns The CustomElement instance.
     */
    injectStyles(styles: Partial<CSSStyleDeclaration>): this;
    /**
     * Sets an attribute on the wrapped HTMLElement.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     * @returns The CustomElement instance.
     */
    setAttribute(name: string, value: string): this;
    /**
     * Deletes an attribute from the wrapped HTMLElement.
     * @param name The name of the attribute to delete.
     * @returns The CustomElement instance.
     */
    deleteAttribute(name: string): this;
    /**
     * Gets the value of an attribute from the wrapped HTMLElement.
     * @param name The name of the attribute to get.
     * @returns The value of the attribute.
     */
    getAttribute(name: string): string;
    /**
     * Toggles an attribute on the wrapped HTMLElement.
     * @param name The name of the attribute to toggle.
     * @param value The value to set when toggling the attribute.
     * @returns The CustomElement instance.
     */
    toggleAttribute(name: string, value?: string): this;
    /**
     * Checks if the wrapped HTMLElement has a specific attribute.
     * @param name The name of the attribute to check.
     * @returns True if the attribute exists, false otherwise.
     */
    hasAttribute(name: string): boolean;
    /**
     * Removes styles from the wrapped HTMLElement.
     * @param styles An array of style names to remove.
     * @returns The CustomElement instance.
     */
    removeStyles(styles: string[]): this;
    /**
     * Appends a child element to the wrapped HTMLElement.
     * @param cmp The child element to append.
     * @returns The CustomElement instance.
     */
    appendChild(cmp: HTMLElement | DocumentFragment): this;
    /**
     * Adds an event listener to the wrapped HTMLElement.
     * @param event The event type to listen for.
     * @param handler The event handler function.
     * @returns The CustomElement instance.
     */
    addEventListener<K extends keyof HTMLElementEventMap>(event: K, handler: EventListener): this;
    /**
     * Removes an event listener from the wrapped HTMLElement.
     * @param event The event type to remove the listener from.
     * @returns The CustomElement instance.
     */
    removeEventListener<K extends keyof HTMLElementEventMap>(event: K): this;
    /**
     * Renders the wrapped HTMLElement.
     * @returns The wrapped HTMLElement.
     */
    _render(): T;
    /**
     * Destroys the CustomElement by removing event listeners and the wrapped HTMLElement.
     */
    destroy(): void;
}
