export interface ICahceOptions<T> {
  /**
   * time to live, defines cache entry lifetime, defualt 60000ms (1min)
   */
  ttl: number;
  /**
   * Called after adding a new item into the cache
   */
  onSet?: (key: string, value: T) => void;
  /**
   * Called after item is removed from the cache
   */
  onRemove?: (key: string, value: T) => void;
}

export interface ICacheEntryOptions<T extends {} = {}> {
  /**
   * If not set, the instances ttl is used
   */
  ttl?: number;
  /**
   * called after entry is removed from the cache
   */
  onRemove?: (key: string, value: T) => void;
}

interface ICacheEntry<T = unknown> {
  handle: number | NodeJS.Timeout;
  value: T;
  onRemove?: (key: string, value: T) => void;
}

interface ICache<T = unknown> {
  [key: string]: ICacheEntry<T>;
}

/**
 * Default time to live (1 min)
 */
export const DEFAULT_TTL = 60 * 1000;

export default class Cache<T = unknown> {
  /**
   * @ignore
   */
  private _cache: ICache<T> = {};
  /**
   * @ignore
   */
  private readonly _ttl: number;
  /**
   * @ignore
   */
  private readonly _onSet?: (key: string, value: T) => void;
  /**
   * @ignore
   */
  private readonly _onRemove?: (key: string, value: T) => void;

  public get length(): number {
    return Object.keys(this._cache).length;
  }

  constructor(options?: ICahceOptions<T>) {
    this._ttl = options?.ttl ?? DEFAULT_TTL;
    this._onSet = options?.onSet;
    this._onRemove = options?.onRemove;
  }

  /**
   * Check if an entry with given key exists
   */
  public has(key: string) {
    return !!this._cache[key];
  }

  /**
   * Adds a new entry into the cache
   */
  public set(key: string, value: T, options?: ICacheEntryOptions<T>) {
    const existingValue = this._cache[key];

    if (existingValue) {
      clearTimeout(existingValue.handle as any);
    }

    const handle = setTimeout(
      () => this.remove(key),
      options?.ttl ?? this._ttl
    );

    this._cache[key] = {
      handle,
      onRemove: options?.onRemove,
      value,
    };

    this._onSet?.(key, value);
  }

  /**
   * Returns the value for a given key
   * or undefined if nothing found
   */
  public get(key: string): T | undefined {
    return this._cache[key]?.value;
  }

  /**
   * Removes an entry from the cache
   */
  public remove(key: string) {
    const entry = this._cache[key];

    if (entry) {
      clearTimeout(entry.handle as any);
      delete this._cache[key];

      entry.onRemove?.(key, entry.value);
      this._onRemove?.(key, entry.value);
    }
  }

  /**
   * Clears the cache
   */
  public clear() {
    for (const key in this._cache) {
      if (this.has(key)) {
        clearTimeout(this._cache[key].handle as any);
      }
    }

    this._cache = {};
  }
}
