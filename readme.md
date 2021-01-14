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

# Supported types

- number
- boolean
- string
- object
- null
- undefined
- strict array
- date
- long string

# Not supported types

- movieclip
- reference
- ecma array
- unsupported
- recordset
- xml document
- typed object
- avmplus object
