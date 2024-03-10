"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statble = void 0;
const LifeSycle_1 = require("./LifeSycle");
const store_1 = require("./store");
/**
 * Abstract class for objects that manage state, extending `LifeSycle`.
 */
class Statble extends LifeSycle_1.LifeSycle {
    _state = {};
    /**
     * Dispatches a state change for a given identifier.
     * @param identifier The identifier for the state.
     * @param data The data to dispatch for the state.
     */
    stateDispatch(identifier, data) {
        store_1.store.dispatch(identifier, data);
    }
    /**
     * Unsubscribes from state changes for a given identifier.
     * @param identifier The identifier to unsubscribe from.
     */
    stateUnsibscribe(identifier) {
        store_1.store.unsubscribe.bind(store_1.store, this)([identifier]);
    }
    /**
     * Sets global state for a given identifier.
     * @param identifier The identifier for the state.
     * @param data The data to set for the state.
     */
    setGlobalState(identifier, data) {
        store_1.store.setState.bind(store_1.store, this)(identifier, data);
    }
    /**
     * Subscribes to state changes for one or more identifiers.
     * @param identifiers The identifier(s) to subscribe to.
     * @returns The state value(s) for the identifier(s).
     */
    stateSubscribe(identifiers) {
        const states = store_1.store.subscribe.bind(store_1.store, this)(Array.isArray(identifiers) ? identifiers : [identifiers]);
        return states.length === 1 ? states[0] : states;
    }
    /**
     * Sets the state for a given identifier.
     * @param identifier The identifier for the state.
     * @param data The data to set for the state.
     */
    setState(identifier, data) {
        if (identifier in this._state)
            return;
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
exports.Statble = Statble;
