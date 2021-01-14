const {
	UNDEFINED,
} = require('../const');

const encodeUndefined = () => {
	return Buffer.from([UNDEFINED]);
};

const decodeUndefined = () => {
	return undefined;
};

module.exports = {
	encodeUndefined,
	decodeUndefined,
};
