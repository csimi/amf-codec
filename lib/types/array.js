const {
	MARKER_LENGTH,
	STRICT_ARRAY,
} = require('../const');

const ARRAY_LENGTH = 4;

const encodeArray = (value, toAMF) => {
	const buf = Buffer.allocUnsafe(MARKER_LENGTH + ARRAY_LENGTH);
	
	buf.writeUInt8(STRICT_ARRAY, 0);
	buf.writeUInt32BE(value.length, MARKER_LENGTH);
	
	return Buffer.concat([
		buf,
		...value.map(toAMF),
	]);
};

const decodeArray = (buf, memo, decodeAMF) => {
	const data = [];
	
	const length = buf.readUInt32BE(memo.pos);
	memo.pos += ARRAY_LENGTH;
	
	while (data.length < length) {
		data.push(decodeAMF(buf, memo));
	}
	
	return data;
};

module.exports = {
	encodeArray,
	decodeArray,
};
