const {
	NULL,
} = require('../const');

const encodeNull = () => {
	return Buffer.from([NULL]);
};

const decodeNull = () => {
	return null;
};

module.exports = {
	encodeNull,
	decodeNull,
};
