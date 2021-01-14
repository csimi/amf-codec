const number = 42;
const string = 'foobar';

module.exports = {
	number,
	string,
	'object': {
		[string]: number,
		'': string,
	},
	'array': [number, string],
	'date': new Date('2021-01-13T17:30:15Z'),
};
