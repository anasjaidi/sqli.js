import { IStore, StoreSubscribeConfig } from '../types/store';
import { LocalStorageHandler } from './webApiStorage';
declare class Store extends LocalStorageHandler implements IStore {
    private _state;
    private static instance;
    constructor();
    static createInstance(): Store;
    /**
     * Subscribes a context to state changes for the given identifiers.
     * @param ctx The context to subscribe.
     * @param identifiers The identifiers to subscribe to.
     * @returns An array of states for the subscribed identifiers.
     */
    subscribe(ctx: any, identifiers: string[]): any[];
    /**
     * Unsubscribes a context from state changes for the given identifiers.
     * @param ctx The context to unsubscribe.
     * @param identifiers The identifiers to unsubscribe from.
     */
    unsubscribe(ctx: any, identifiers: string[]): void;
    /**
     * Dispatches an action to update state for the given identifier.
     * @param identifier The identifier of the state to update.
     * @param cb The callback function to update the state.
     */
    dispatch(identifier: string, cb: any): void;
    /**
     * Sets the state for the given identifier.
     * @param ctx The context setting the state.
     * @param identifier The identifier of the state to set.
     * @param state The new state value.
     * @returns The updated state object.
     */
    setState<T>(ctx: any, identifier: string, state: T, conf?: StoreSubscribeConfig): {
        state: any;
        subscribes: import("../types/store").Subscription[];
        identifier: string;
        conf: StoreSubscribeConfig;
    };
}
export declare const store: Store;
export {};
