[timed-memory-cache](../README.md) / [Exports](../modules.md) / default

# Class: default<T\>

## Type parameters

Name | Default |
:------ | :------ |
`T` | *unknown* |

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

\+ **new default**<T\>(`options?`: [*ICahceOptions*](../interfaces/icahceoptions.md)<T\>): [*default*](default.md)<T\>

#### Type parameters:

Name | Default |
:------ | :------ |
`T` | *unknown* |

#### Parameters:

Name | Type |
:------ | :------ |
`options?` | [*ICahceOptions*](../interfaces/icahceoptions.md)<T\> |

**Returns:** [*default*](default.md)<T\>

Defined in: index.ts:62

## Accessors

### length

• get **length**(): *number*

**Returns:** *number*

Defined in: index.ts:60

## Methods

### clear

▸ **clear**(): *void*

Clears the cache

**Returns:** *void*

Defined in: index.ts:127

___

### get

▸ **get**(`key`: *string*): *undefined* \| T

Returns the value for a given key
or undefined if nothing found

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *undefined* \| T

Defined in: index.ts:105

___

### has

▸ **has**(`key`: *string*): *boolean*

Check if an entry with given key exists

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *boolean*

Defined in: index.ts:73

___

### remove

▸ **remove**(`key`: *string*): *void*

Removes an entry from the cache

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |

**Returns:** *void*

Defined in: index.ts:112

___

### set

▸ **set**(`key`: *string*, `value`: T, `options?`: [*ICacheEntryOptions*](../interfaces/icacheentryoptions.md)<T\>): *void*

Adds a new entry into the cache

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | T |
`options?` | [*ICacheEntryOptions*](../interfaces/icacheentryoptions.md)<T\> |

**Returns:** *void*

Defined in: index.ts:80
