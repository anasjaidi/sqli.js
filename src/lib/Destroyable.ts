import { IDestroyable } from '../types';
import { Component } from './Component';
import { Initializeble } from './Initializeble';


/**
 * Abstract class for objects that can be destroyed, extending from `Initializeble`.
 */
export abstract class Destroyable extends Initializeble implements IDestroyable {
  protected __toDestroy: Component[] = [];
  protected _element: HTMLElement;

  /**
   * Destroys the object by calling the `destroy` method on all components to be destroyed
   * and removing the element from the DOM.
   */
  destroy(): void {
    this.__toDestroy.reverse().forEach((d) => d.destroy());
    this._element.remove();
    this.__toDestroy = [];
  }
}
