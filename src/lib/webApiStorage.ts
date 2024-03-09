import { StorageHandler } from '../types/store';

export abstract class LocalStorageHandler implements StorageHandler {
  /**
   * Stores an object in local storage.
   * @param key The key under which to store the object.
   * @param value The value to store.
   */
  storeObject(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * Deletes an object from local storage.
   * @param key The key of the object to delete.
   */
  deleteObject(key: string): void {
    localStorage.removeItem(key);
  }
}
