export interface StoreSubscribeConfig {
    persist?: boolean;
}
/**
 * Represents a store that manages application state.
 */
export interface IStore {
    /**
     * Subscribes a context to state changes for specified identifiers.
     * @param ctx The context to subscribe.
     * @param identifiers An array of identifier strings to subscribe to.
     * @returns An array of state values corresponding to the subscribed identifiers.
     */
    subscribe(ctx: any, identifiers: string[], conf?: StoreSubscribeConfig): any[];
    /**
     * Unsubscribes a context from state changes for specified identifiers.
     * @param ctx The context to unsubscribe.
     * @param identifiers An array of identifier strings to unsubscribe from.
     */
    unsubscribe(ctx: any, identifiers: string[]): void;
    /**
     * Dispatches a state change for a specified identifier, triggering callbacks.
     * @param identifier The identifier of the state to dispatch.
     * @param cb The callback function to execute for the state change.
     */
    dispatch(identifier: string, cb: any): void;
    /**
     * Sets the state for a specific context and identifier.
     * @param ctx The context to set the state for.
     * @param identifier The identifier of the state to set.
     * @param state The new state value.
     * @returns An object containing the new state, the context, and the identifier.
     */
    setState<T>(ctx: any, identifier: string, state: T): {
        state: T;
        subscribes: any[];
        identifier: string;
    };
}
/**
 * Represents the state of the application.
 */
export interface State {
    [key: string]: {
        state: any;
        subscribes: Subscription[];
        identifier: string;
        conf: StoreSubscribeConfig;
    };
}
/**
 * Represents a subscription to the state.
 */
export interface Subscription {
    ctx: any;
}
/**
 * Represents a storage handler for storing and deleting objects.
 */
export interface StorageHandler {
    /**
     * Stores an object in the storage.
     * @param key The key under which to store the object.
     * @param value The object to store.
     */
    storeObject(key: string, value: any): void;
    /**
     * Deletes an object from the storage.
     * @param key The key of the object to delete.
     */
    deleteObject(key: string): void;
}
