[timed-memory-cache](../README.md) / [Exports](../modules.md) / ICacheEntryOptions

# Interface: ICacheEntryOptions<T\>

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`T` | *object* | {} |

## Table of contents

### Properties

- [onRemove](icacheentryoptions.md#onremove)
- [ttl](icacheentryoptions.md#ttl)

## Properties

### onRemove

• `Optional` **onRemove**: (`key`: *string*, `value`: T) => *void*

called after entry is removed from the cache

#### Type declaration:

▸ (`key`: *string*, `value`: T): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`key` | *string* |
`value` | T |

**Returns:** *void*

Defined in: index.ts:24

Defined in: index.ts:24

___

### ttl

• `Optional` **ttl**: *number*

If not set, the instances ttl is used

Defined in: index.ts:20
