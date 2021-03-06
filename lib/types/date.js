const {
	MARKER_LENGTH,
	DATE,
} = require('../const');

const DATE_LENGTH = 8;
const DATE_TIMEZONE_LENGTH = 2;

const encodeDate = (date) => {
	const buf = Buffer.allocUnsafe(MARKER_LENGTH + DATE_LENGTH + DATE_TIMEZONE_LENGTH);
	
	buf.writeUInt8(DATE, 0);
	buf.writeDoubleBE(date.valueOf(), MARKER_LENGTH);
	buf.writeUInt16BE(0, MARKER_LENGTH + DATE_LENGTH);
	
	return buf;
};

const decodeDate = (buf, memo) => {
	return new Date(buf.readDoubleBE(memo.consume(DATE_LENGTH + DATE_TIMEZONE_LENGTH)));
};

module.exports = {
	encodeDate,
	decodeDate,
};
