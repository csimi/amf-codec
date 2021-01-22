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
	return buf.readDoubleBE(memo.consume(NUMBER_LENGTH));
};

module.exports = {
	encodeNumber,
	decodeNumber,
};
