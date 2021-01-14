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
	const offset = type === STRING ? SHORT_STRING_LENGTH : LONG_STRING_LENGTH;
	const length = type === STRING ? buf.readUInt16BE(memo.pos) : buf.readUInt32BE(memo.pos);
	const end = memo.pos + offset + length;
	
	const value = buf.slice(memo.pos + offset, end).toString('utf8');
	memo.pos = end;
	
	return value;
};

module.exports = {
	encodeStringValue,
	encodeString,
	decodeString,
};
