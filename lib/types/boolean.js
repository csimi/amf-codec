const {
	BOOLEAN,
} = require('../const');

const BOOLEAN_LENGTH = 1;

const encodeBoolean = (value) => {
	return Buffer.from([BOOLEAN, Number(value)]);
};

const decodeBoolean = (buf, memo) => {
	const value = Boolean(buf.readUInt8(memo.pos));
	memo.pos += BOOLEAN_LENGTH;
	return value;
};

module.exports = {
	encodeBoolean,
	decodeBoolean,
};
