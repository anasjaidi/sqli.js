"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalStorageHandler = void 0;
class LocalStorageHandler {
    /**
     * Stores an object in local storage.
     * @param key The key under which to store the object.
     * @param value The value to store.
     */
    storeObject(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    /**
     * Deletes an object from local storage.
     * @param key The key of the object to delete.
     */
    deleteObject(key) {
        localStorage.removeItem(key);
    }
}
exports.LocalStorageHandler = LocalStorageHandler;
