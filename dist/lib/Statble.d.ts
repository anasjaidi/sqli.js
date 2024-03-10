import { IProps } from '../types';
import { LifeSycle } from './LifeSycle';
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
export declare abstract class Statble extends LifeSycle implements IStatble {
    protected _state: any;
    abstract _render(props?: IProps): HTMLElement;
    /**
     * Dispatches a state change for a given identifier.
     * @param identifier The identifier for the state.
     * @param data The data to dispatch for the state.
     */
    stateDispatch(identifier: string, data: any): void;
    /**
     * Unsubscribes from state changes for a given identifier.
     * @param identifier The identifier to unsubscribe from.
     */
    stateUnsibscribe(identifier: string): void;
    /**
     * Sets global state for a given identifier.
     * @param identifier The identifier for the state.
     * @param data The data to set for the state.
     */
    setGlobalState(identifier: string, data: any): void;
    /**
     * Subscribes to state changes for one or more identifiers.
     * @param identifiers The identifier(s) to subscribe to.
     * @returns The state value(s) for the identifier(s).
     */
    stateSubscribe(identifiers: string | string[]): any;
    /**
     * Sets the state for a given identifier.
     * @param identifier The identifier for the state.
     * @param data The data to set for the state.
     */
    setState(identifier: string, data: any): void;
}
