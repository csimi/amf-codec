const { expect } = require('chai');
const {
	toAMF,
	fromAMF,
} = require('../..');

describe('unknown', () => {
	it('throws when encoding unknown type', () => {
		return expect(toAMF.bind(null, Symbol('unknown'))).to.throw();
	});
	
	it('throws when decoding unknown type', () => {
		return expect(fromAMF.bind(null, Buffer.from([0x20]))).to.throw();
	});
});
