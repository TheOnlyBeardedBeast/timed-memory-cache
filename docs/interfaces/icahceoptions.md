[timed-memory-cache](../README.md) / [Exports](../modules.md) / ICahceOptions

# Interface: ICahceOptions<T\>

## Type parameters

Name |
:------ |
`T` |

## Table of contents

### Properties

- [onRemove](icahceoptions.md#onremove)
- [onSet](icahceoptions.md#onset)
- [ttl](icahceoptions.md#ttl)

## Properties

### onRemove

• `Optional` **onRemove**: (`key`: *string*, `value`: T) => *void*

Called after item is removed from the cache

#### Type declaration:

▸ (`key`: *string*, `value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | T |

**Returns:** *void*

Defined in: index.ts:13

Defined in: index.ts:13

___

### onSet

• `Optional` **onSet**: (`key`: *string*, `value`: T) => *void*

Called after adding a new item into the cache

#### Type declaration:

▸ (`key`: *string*, `value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | T |

**Returns:** *void*

Defined in: index.ts:9

Defined in: index.ts:9

___

### ttl

• **ttl**: *number*

time to live, defines cache entry lifetime, defualt 60000ms (1min)

Defined in: index.ts:5
