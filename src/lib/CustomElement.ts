import { ElementConfig } from "../types";


/**
 * Represents a custom element wrapper that provides utility methods for managing an HTMLElement.
 * @template T The type of the wrapped HTMLElement.
 */
export class CustomElement<T extends HTMLElement> {
  private _component: T;
  private _eventListeners: {
    [event in keyof HTMLElementEventMap]?: EventListener;
  };

  protected __position: number = 0;

  get position() {
    return this.__position;
  }

  set position(idx: number) {
    this.__position = idx;
  }

  /**
   * Creates an instance of CustomElement.
   * @param component The HTMLElement to wrap.
   */
  constructor(component: T, conf?: ElementConfig) {
    this._eventListeners = {};
    this._component = component;
    conf &&
      (Object.entries(conf.attributes || {}).forEach(([K, V]) => {
        this.setAttribute(K, V);
      }),
      Object.entries(conf.events || {}).map(([K, V]) => {
        this.addEventListener(K as keyof HTMLElementEventMap, V);
      }),
      this.injectStyles(conf.styles || {}),
      conf.innerText && (this._component.innerText = conf.innerText));
  }

  /**
   * Injects styles into the wrapped HTMLElement.
   * @param styles The styles to inject.
   * @returns The CustomElement instance.
   */
  injectStyles(styles: Partial<CSSStyleDeclaration>) {
    Object.assign(this._component.style, styles);
    return this;
  }

  /**
   * Sets an attribute on the wrapped HTMLElement.
   * @param name The name of the attribute.
   * @param value The value of the attribute.
   * @returns The CustomElement instance.
   */
  setAttribute(name: string, value: string) {
    this._component.setAttribute(name, value);
    return this;
  }

  /**
   * Deletes an attribute from the wrapped HTMLElement.
   * @param name The name of the attribute to delete.
   * @returns The CustomElement instance.
   */
  deleteAttribute(name: string) {
    this._component.removeAttribute(name);
    return this;
  }

  /**
   * Gets the value of an attribute from the wrapped HTMLElement.
   * @param name The name of the attribute to get.
   * @returns The value of the attribute.
   */
  getAttribute(name: string) {
    return this._component.getAttribute(name);
  }

  /**
   * Toggles an attribute on the wrapped HTMLElement.
   * @param name The name of the attribute to toggle.
   * @param value The value to set when toggling the attribute.
   * @returns The CustomElement instance.
   */
  toggleAttribute(name: string, value: string = '') {
    if (this._component.hasAttribute(name)) {
      this._component.removeAttribute(name);
    } else {
      this._component.setAttribute(name, value);
    }
    return this;
  }

  /**
   * Checks if the wrapped HTMLElement has a specific attribute.
   * @param name The name of the attribute to check.
   * @returns True if the attribute exists, false otherwise.
   */
  hasAttribute(name: string) {
    return this._component.hasAttribute(name);
  }

  /**
   * Removes styles from the wrapped HTMLElement.
   * @param styles An array of style names to remove.
   * @returns The CustomElement instance.
   */
  removeStyles(styles: string[]) {
    for (let s of styles) {
      this._component.style.removeProperty(s);
    }
    return this;
  }

  /**
   * Appends a child element to the wrapped HTMLElement.
   * @param cmp The child element to append.
   * @returns The CustomElement instance.
   */
  appendChild(cmp: HTMLElement | DocumentFragment) {
    this._component.appendChild(cmp);
    return this;
  }

  /**
   * Adds an event listener to the wrapped HTMLElement.
   * @param event The event type to listen for.
   * @param handler The event handler function.
   * @returns The CustomElement instance.
   */
  addEventListener<K extends keyof HTMLElementEventMap>(
    event: K,
    handler: EventListener
  ) {
    this._eventListeners[event] = handler;
    this._component.addEventListener(event, handler);
    return this;
  }

  /**
   * Removes an event listener from the wrapped HTMLElement.
   * @param event The event type to remove the listener from.
   * @returns The CustomElement instance.
   */
  removeEventListener<K extends keyof HTMLElementEventMap>(event: K) {
    if (this._eventListeners[event]) {
      this._component.removeEventListener(
        event,
        this._eventListeners[event] as EventListener
      );
      delete this._eventListeners[event];
    }
    return this;
  }

  /**
   * Renders the wrapped HTMLElement.
   * @returns The wrapped HTMLElement.
   */
  _render() {
    return this._component;
  }

  /**
   * Destroys the CustomElement by removing event listeners and the wrapped HTMLElement.
   */
  destroy() {
    for (let event in this._eventListeners) {
      this.removeEventListener(event as keyof HTMLElementEventMap);
    }
    this._component.remove();
  }
}
