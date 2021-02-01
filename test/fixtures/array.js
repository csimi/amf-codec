const {
	number,
	string,
} = require('./types');

const sparse = [number];
sparse[2] = string;

module.exports = {
	'empty': [],
	'dense': [number, string],
	sparse,
};
