[![npm version](https://img.shields.io/npm/v/amf-codec.svg?logo=npm)](https://www.npmjs.com/package/amf-codec)
[![build status](https://github.com/csimi/amf-codec/workflows/build/badge.svg)](https://github.com/csimi/amf-codec/actions)
[![codecov](https://codecov.io/gh/csimi/amf-codec/branch/master/graph/badge.svg)](https://codecov.io/gh/csimi/amf-codec)

# About

Tiny AMF0 encoder/decoder with high performance.

# Usage

Install using npm:

```
$ npm install amf-codec
```

## Encode

```
const { toAMF } = require('amf-codec');

const data = {
	'foobar': 42,
};

console.log(toAMF(data));
```

## Decode

```
const { fromAMF } = require('amf-codec');

const data = Buffer.from([1, 1]);

console.log(fromAMF(data));
```

## Decode from arbitrary position

For example to skip the first byte of buffer:

```
const { decodeAMF, Memo } = require('amf-codec');

const data = Buffer.from([0, 1, 1]);

console.log(decodeAMF(data, new Memo(1)));
```

## Memo class

```
const { Memo } = require('amf-codec');

const data = Buffer.from([0, 1, 2, 3, 4, 5, 6]);
const memo = new Memo(1); // set initial position to ignore 1 byte

console.log(data.readUInt16BE(memo.consume(2)/* === 1 */));
// consume(amount of bytes) returns current position before increasing its value
console.log(data.slice(memo.position/* === 3*/, memo.skip(4)/* === 7*/));
// skip(amount of bytes) increases position before returning its value
```

# Supported types

- number
- boolean
- string
- ecma array
- object
- null
- undefined
- reference
- strict array
- date
- long string
- typed object

# Not supported types

- movieclip
- unsupported
- recordset
- xml document
- avmplus object
