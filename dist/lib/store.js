"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const webApiStorage_1 = require("./webApiStorage");
class Store extends webApiStorage_1.LocalStorageHandler {
    _state;
    static instance;
    constructor() {
        super();
        this._state = {};
    }
    static createInstance() {
        if (Store.instance) {
            return this.instance;
        }
        return (this.instance = new Store());
    }
    /**
     * Subscribes a context to state changes for the given identifiers.
     * @param ctx The context to subscribe.
     * @param identifiers The identifiers to subscribe to.
     * @returns An array of states for the subscribed identifiers.
     */
    subscribe(ctx, identifiers) {
        let states = [];
        identifiers.forEach((identifier) => {
            this._state[identifier] &&
                (states.push(this._state[identifier].state),
                    !this._state[identifier].subscribes.find((s) => s.ctx === ctx)
                        ? this._state[identifier].subscribes.push({
                            ctx,
                        })
                        : {});
        });
        return states;
    }
    /**
     * Unsubscribes a context from state changes for the given identifiers.
     * @param ctx The context to unsubscribe.
     * @param identifiers The identifiers to unsubscribe from.
     */
    unsubscribe(ctx, identifiers) {
        identifiers.forEach((identifier) => {
            this._state[identifier]
                ? (this._state[identifier].subscribes = this._state[identifier].subscribes.filter((s) => s.ctx !== ctx))
                : {};
        });
    }
    /**
     * Dispatches an action to update state for the given identifier.
     * @param identifier The identifier of the state to update.
     * @param cb The callback function to update the state.
     */
    dispatch(identifier, cb) {
        typeof cb == 'function'
            ? cb(identifier, this._state)
            : (this._state[identifier] = { ...this._state[identifier], state: cb });
        this._state[identifier].subscribes.reverse().forEach((s) => {
            if (this._state[identifier].subscribes.find((s__) => {
                return "hasChild" in s__.ctx && s__.ctx.hasChild(s.ctx);
            })) {
                return;
            }
            s.ctx['destroy']();
            s.ctx['_init']()['_render']();
        });
    }
    /**
     * Sets the state for the given identifier.
     * @param ctx The context setting the state.
     * @param identifier The identifier of the state to set.
     * @param state The new state value.
     * @returns The updated state object.
     */
    setState(ctx, identifier, state) {
        this._state[identifier] = {
            identifier,
            state,
            subscribes: [{ ctx }],
        };
        return this._state[identifier];
    }
}
exports.store = Store.createInstance();
