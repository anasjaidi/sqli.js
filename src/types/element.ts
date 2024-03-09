/**
 * Represents a component that can be rendered to the DOM.
 */
export interface ICustomHtmlElement {
    /**
     * Injects styles into the component.
     * @param styles An object containing CSS style properties and values.
     * @returns The current instance of the component.
     */
    injectStyles(styles: Partial<CSSStyleDeclaration>): ICustomHtmlElement;
  
    /**
     * Sets an attribute on the component.
     * @param name The name of the attribute.
     * @param value The value of the attribute.
     * @returns The current instance of the component.
     */
    setAttribute(name: string, value: string): ICustomHtmlElement;
  
    /**
     * Deletes an attribute from the component.
     * @param name The name of the attribute to delete.
     * @returns The current instance of the component.
     */
    deleteAttribute(name: string): ICustomHtmlElement;
  
    /**
     * Gets the value of an attribute on the component.
     * @param name The name of the attribute.
     * @returns The value of the attribute, or null if the attribute does not exist.
     */
    getAttribute(name: string): string | null;
  
    /**
     * Toggles an attribute on the component.
     * If the attribute exists, it is removed. If it does not exist, it is added with the specified value.
     * @param name The name of the attribute to toggle.
     * @param value The value to set when adding the attribute (optional).
     * @returns The current instance of the component.
     */
    toggleAttribute(name: string, value?: string): ICustomHtmlElement;
  
    /**
     * Checks if the component has a specific attribute.
     * @param name The name of the attribute to check.
     * @returns True if the attribute exists, otherwise false.
     */
    hasAttribute(name: string): boolean;
  
    /**
     * Removes styles from the component.
     * @param styles An array of style properties to remove.
     * @returns The current instance of the component.
     */
    removeStyles(styles: string[]): ICustomHtmlElement;
  
    /**
     * Appends a child element or document fragment to the component.
     * @param cmp The child element or document fragment to append.
     * @returns The current instance of the component.
     */
    appendChild(cmp: HTMLElement | DocumentFragment): ICustomHtmlElement;
  
    /**
     * Adds an event listener to the component.
     * @param event The event type to listen for.
     * @param handler The event handler function.
     * @returns The current instance of the component.
     */
    addEventListener(event: string, handler: EventListener): ICustomHtmlElement;
  
    /**
     * Removes an event listener from the component.
     * @param event The event type to remove the listener from.
     * @returns The current instance of the component.
     */
    removeEventListener(event: string): ICustomHtmlElement;
  
    /**
     * Renders the component.
     * @returns The rendered component.
     */
    render(): HTMLElement;
  
    /**
     * Destroys the component, removing event listeners and the component itself from the DOM.
     */
    destroy(): void;
  }