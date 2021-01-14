const {
	MARKER_LENGTH,
	OBJECT,
	OBJECT_END,
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

const decodeObject = (buf, memo, decodeAMF) => {
	const data = {};
	
	while (memo.pos < buf.length) {
		const key = decodeString(buf, memo);
		if (!key && buf[memo.pos] === OBJECT_END) {
			memo.pos += MARKER_LENGTH;
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
