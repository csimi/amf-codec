const {
	MARKER_LENGTH,
	NUMBER,
} = require('../const');

const NUMBER_LENGTH = 8;

const encodeNumber = (value) => {
	const buf = Buffer.allocUnsafe(MARKER_LENGTH + NUMBER_LENGTH);
	
	buf.writeUInt8(NUMBER, 0);
	buf.writeDoubleBE(value, MARKER_LENGTH);
	
	return buf;
};

const decodeNumber = (buf, memo) => {
	const value = buf.readDoubleBE(memo.pos);
	memo.pos += NUMBER_LENGTH;
	return value;
};

module.exports = {
	encodeNumber,
	decodeNumber,
};
