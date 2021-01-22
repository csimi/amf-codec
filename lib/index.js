const {
	MARKER_LENGTH,
	NUMBER,
	BOOLEAN,
	STRING,
	OBJECT,
	NULL,
	LONG_STRING,
	UNDEFINED,
	STRICT_ARRAY,
	DATE,
} = require('./const');
const {
	encodeNumber,
	decodeNumber,
} = require('./types/number');
const {
	encodeBoolean,
	decodeBoolean,
} = require('./types/boolean');
const {
	encodeString,
	decodeString,
} = require('./types/string');
const {
	encodeObject,
	decodeObject,
} = require('./types/object');
const {
	encodeNull,
	decodeNull,
} = require('./types/null');
const {
	encodeUndefined,
	decodeUndefined,
} = require('./types/undefined');
const {
	encodeArray,
	decodeArray,
} = require('./types/array');
const {
	encodeDate,
	decodeDate,
} = require('./types/date');
const Memo = require('./memo');

const toAMF = (value) => {
	const type = typeof value;
	switch (type) {
		case 'number':
			return encodeNumber(value);
		case 'boolean':
			return encodeBoolean(value);
		case 'string':
			return encodeString(value);
		case 'object':
			if (value === null) {
				return encodeNull(value);
			}
			if (value instanceof Array) {
				return encodeArray(value, toAMF);
			}
			if (value instanceof Date) {
				return encodeDate(value);
			}
			return encodeObject(value, toAMF);
		case 'undefined':
			return encodeUndefined(value);
		default:
			throw new Error(`Cannot encode unknown type of ${type}`);
	}
};

const decodeAMF = (buffer, memo) => {
	const type = buffer.readUInt8(memo.consume(MARKER_LENGTH));
	switch (type) {
		case NUMBER:
			return decodeNumber(buffer, memo);
		case BOOLEAN:
			return decodeBoolean(buffer, memo);
		case STRING:
		case LONG_STRING:
			return decodeString(buffer, memo, type);
		case OBJECT:
			return decodeObject(buffer, memo, decodeAMF);
		case NULL:
			return decodeNull(buffer, memo);
		case UNDEFINED:
			return decodeUndefined(buffer, memo);
		case STRICT_ARRAY:
			return decodeArray(buffer, memo, decodeAMF);
		case DATE:
			return decodeDate(buffer, memo);
		default:
			throw new Error(`Cannot decode unknown type of ${type}`);
	}
};

const fromAMF = (buffer) => {
	const memo = new Memo(0);
	return decodeAMF(buffer, memo);
};

module.exports = {
	toAMF,
	decodeAMF,
	fromAMF,
	Memo,
};
