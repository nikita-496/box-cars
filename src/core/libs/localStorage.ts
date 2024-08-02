import type { API } from "@/core/types/api.type";

import { storagePrefix } from "@/core/config/storage.config";

interface IStorageFacrory<TStorageContent> {
  get: () => void;
  set: (value: TStorageContent) => void;
  clear: () => void;
}

class StorageFactory<TStorageContent>
  implements IStorageFacrory<TStorageContent>
{
  private readonly key: string;
  constructor(key: string) {
    this.key = key;
  }

  get() {
    try {
      const serializeData = window.localStorage.getItem(
        storagePrefix + this.key,
      );
      if (serializeData === null) {
        return undefined;
      }
      return JSON.parse(serializeData) as TStorageContent;
    } catch (error) {
      return undefined;
    }
  }
  set(value: TStorageContent) {
    try {
      const serializeData = JSON.stringify(value);
      window.localStorage.setItem(storagePrefix + this.key, serializeData);
    } catch (error) {
      return undefined;
    }
  }
  clear() {
    try {
      window.localStorage.removeItem(storagePrefix + this.key);
    } catch (error) {
      return undefined;
    }
  }
}

export const authStorage = new StorageFactory<API.Auth.AuthResonse>("auth");
