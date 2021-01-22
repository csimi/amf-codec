const {
	BOOLEAN,
} = require('../const');

const BOOLEAN_LENGTH = 1;

const encodeBoolean = (value) => {
	return Buffer.from([BOOLEAN, Number(value)]);
};

const decodeBoolean = (buf, memo) => {
	return Boolean(buf.readUInt8(memo.consume(BOOLEAN_LENGTH)));
};

module.exports = {
	encodeBoolean,
	decodeBoolean,
};
