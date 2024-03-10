import { IProps } from '../types';
import { LifeSycle } from './LifeSycle';
import { store } from './store';

/**
 * Interface for objects that manage state.
 */
export interface IStatble {
  /**
   * Sets global state for a given identifier.
   * @param identifier The identifier for the state.
   * @param data The data to set for the state.
   */
  setGlobalState: (identifier: string, data: any) => void;

  /**
   * Subscribes to state changes for one or more identifiers.
   * @param identifiers The identifier(s) to subscribe to.
   * @returns The state value(s) for the identifier(s).
   */
  stateSubscribe: (identifiers: string[] | string) => any[] | any;

  /**
   * Dispatches a state change for a given identifier.
   * @param identifier The identifier for the state.
   * @param data The data to dispatch for the state.
   */
  stateDispatch: (identifier: string, data: any) => void;

  /**
   * Unsubscribes from state changes for a given identifier.
   * @param identifier The identifier to unsubscribe from.
   */
  stateUnsibscribe: (identifier: string) => void;
}

/**
 * Abstract class for objects that manage state, extending `LifeSycle`.
 */
export abstract class Statble extends LifeSycle implements IStatble {
  protected _state: any = {};

  abstract _render(props?: IProps): HTMLElement ;

  /**
   * Dispatches a state change for a given identifier.
   * @param identifier The identifier for the state.
   * @param data The data to dispatch for the state.
   */
  stateDispatch(identifier: string, data: any) {
    store.dispatch(identifier, data);
  }

  /**
   * Unsubscribes from state changes for a given identifier.
   * @param identifier The identifier to unsubscribe from.
   */
  stateUnsibscribe(identifier: string) {
    store.unsubscribe.bind(store, this)([identifier]);
  }

  /**
   * Sets global state for a given identifier.
   * @param identifier The identifier for the state.
   * @param data The data to set for the state.
   */
  setGlobalState(identifier: string, data: any) {
    store.setState.bind(store, this)(identifier, data);
  }

  /**
   * Subscribes to state changes for one or more identifiers.
   * @param identifiers The identifier(s) to subscribe to.
   * @returns The state value(s) for the identifier(s).
   */
  stateSubscribe(identifiers: string | string[]) {
    const states = store.subscribe.bind(
      store,
      this
    )(Array.isArray(identifiers) ? identifiers : [identifiers]);
    return states.length === 1 ? states[0] : states;
  }

  /**
   * Sets the state for a given identifier.
   * @param identifier The identifier for the state.
   * @param data The data to set for the state.
   */
  setState(identifier: string, data: any) {
    if (identifier in this._state) return;
    this._state[`_${identifier}`] = data;
    Object.defineProperty(this._state, `${identifier}`, {
      set: (v) => {
        this._state[`_${identifier}`] = v;
        this.destroy();
        this._init()._render();
      },
      get() {
        return this[`_${identifier}`]; // Bind to `this` manually
      },
    });
    // this._state[identifier] = data
  }
}
