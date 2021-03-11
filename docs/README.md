timed-memory-cache / [Exports](modules.md)

# TimedMemoryCache

# Class: Cache<T\>

## Type parameters

| Name | Default   |
| :--- | :-------- |
| `T`  | _unknown_ |

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Accessors

- [length](default.md#length)

### Methods

- [clear](default.md#clear)
- [get](default.md#get)
- [has](default.md#has)
- [remove](default.md#remove)
- [set](default.md#set)

## Constructors

### constructor

\+ **new Cache**<T\>(`options?`: [_ICahceOptions_](../interfaces/icahceoptions.md)<T\>): [_Cache_](default.md)<T\>

#### Type parameters:

| Name | Default   |
| :--- | :-------- |
| `T`  | _unknown_ |

#### Parameters:

| Name       | Type                                                  |
| :--------- | :---------------------------------------------------- |
| `options?` | [_ICahceOptions_](../interfaces/icahceoptions.md)<T\> |

**Returns:** [_Cache_](default.md)<T\>

#### Examples:

```typescript
import Cache from 'timed-memory-cache';

const cache = new Cache<string>();
```

## Accessors

### length

• get **length**(): _number_

Returns the number of entries in the cache

**Returns:** _number_

#### Examples:

```typescript
const cacheEntryCount = cache.length();
```

---

## Methods

### clear

▸ **clear**(): _void_

Clears the cache

**Returns:** _void_

#### Examples:

```typescript
cache.clear();
```

### get

▸ **get**(`key`: _string_): T | undefined

Returns the value for a given key
or undefined if nothing found

#### Parameters:

| Name  | Type     |
| :---- | :------- |
| `key` | _string_ |

**Returns:** T | undefined

#### Examples:

```typescript
const value = cache.get('myKey');
```

### has

▸ **has**(`key`: _string_): _boolean_

Check if an entry with given key exists

#### Parameters:

| Name  | Type     |
| :---- | :------- |
| `key` | _string_ |

**Returns:** _boolean_

#### Examples:

```typescript
const valueExists = cache.has('myKey');
```

### remove

▸ **remove**(`key`: _string_): _void_

Removes an entry from the cache

#### Parameters:

| Name  | Type     |
| :---- | :------- |
| `key` | _string_ |

**Returns:** _void_

#### Examples:

```typescript
cache.remove('myKey');
```

### set

▸ **set**(`key`: _string_, `value`: T, `options?`: [_ICacheEntryOptions_](../interfaces/icacheentryoptions.md)<T\>): _void_

Adds a new entry into the cache

#### Parameters:

| Name       | Type                                                            |
| :--------- | :-------------------------------------------------------------- |
| `key`      | _string_                                                        |
| `value`    | T                                                               |
| `options?` | [_ICacheEntryOptions_](../interfaces/icacheentryoptions.md)<T\> |

**Returns:** _void_

#### Examples:

```typescript
cache.set('myKey', 'myValue', { ttl: 120 * 1000 }, onRemove:(key,value) => { console.log("entry was removed after 120 seconds")});
```
