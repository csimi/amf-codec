const {
	MARKER_LENGTH,
	ECMA_ARRAY,
	OBJECT,
	OBJECT_END,
	TYPED_OBJECT,
} = require('../const');
const {
	encodeStringValue,
	decodeString,
} = require('./string');

const encodeObject = (value, toAMF) => {
	const buf = [Buffer.from([OBJECT])];
	
	for (const key of Object.keys(value)) {
		buf.push(...encodeStringValue(key));
		buf.push(toAMF(value[key]));
	}
	
	buf.push(Buffer.from([0, 0, OBJECT_END]));
	
	return Buffer.concat(buf);
};

const decodeObject = (buf, memo, type, decodeAMF) => {
	const data = type === ECMA_ARRAY ? [] : {};
	
	if (type === ECMA_ARRAY) {
		memo.consume(4);
	}
	if (type === TYPED_OBJECT) {
		decodeString(buf, memo);
	}
	
	while (memo.position < buf.length) {
		const key = decodeString(buf, memo);
		if (!key && buf[memo.position] === OBJECT_END) {
			memo.consume(MARKER_LENGTH);
			break;
		}
		
		const value = decodeAMF(buf, memo);
		data[key] = value;
	}
	
	return data;
};

module.exports = {
	encodeObject,
	decodeObject,
};
