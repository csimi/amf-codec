const SHORT_STRING = 65535;
const {
	STRING,
	LONG_STRING,
} = require('../const');

const SHORT_STRING_LENGTH = 2;
const LONG_STRING_LENGTH = 4;

const encodeStringValue = (value) => {
	const length = Buffer.byteLength(value);
	
	const offset = length <= SHORT_STRING ? SHORT_STRING_LENGTH : LONG_STRING_LENGTH;
	const buf = Buffer.allocUnsafe(offset);
	
	if (length <= SHORT_STRING) {
		buf.writeUInt16BE(length, 0);
	}
	else {
		buf.writeUInt32BE(length, 0);
	}
	
	return [buf, Buffer.from(value)];
};

const encodeString = (value) => {
	const type = Buffer.byteLength(value) <= SHORT_STRING ? STRING : LONG_STRING;
	const marker = Buffer.from([type]);
	
	return Buffer.concat([marker, ...encodeStringValue(value)]);
};

const decodeString = (buf, memo, type = STRING) => {
	const length = type === STRING
		? buf.readUInt16BE(memo.consume(SHORT_STRING_LENGTH))
		: buf.readUInt32BE(memo.consume(LONG_STRING_LENGTH));
	
	return buf.slice(memo.position, memo.skip(length)).toString();
};

module.exports = {
	encodeStringValue,
	encodeString,
	decodeString,
};
