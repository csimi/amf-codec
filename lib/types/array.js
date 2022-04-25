const {
	MARKER_LENGTH,
	STRICT_ARRAY,
} = require('../const');

const ARRAY_LENGTH = 4;

const encodeArray = (value, toAMF) => {
	const buf = Buffer.allocUnsafe(MARKER_LENGTH + ARRAY_LENGTH);
	
	buf.writeUInt8(STRICT_ARRAY, 0);
	buf.writeUInt32BE(value.length, MARKER_LENGTH);
	
	const bufs = [buf];
	
	for (const data of value) {
		bufs.push(toAMF(data));
	}
	
	return Buffer.concat(bufs);
};

const decodeArray = (buf, memo, decodeAMF) => {
	const data = [];
	memo.references.push(data);
	
	const length = buf.readUInt32BE(memo.consume(ARRAY_LENGTH));
	
	while (data.length < length) {
		data.push(decodeAMF(buf, memo));
	}
	
	return data;
};

module.exports = {
	encodeArray,
	decodeArray,
};
