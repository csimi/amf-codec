const decodeReference = (buf, memo) => {
	const index = buf.readUInt16BE(memo.consume(2));
	return memo.references[index];
};

module.exports = {
	decodeReference,
};
