const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const nullFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'null.bin'));

describe('null', () => {
	it('encodes null', () => {
		return expect(toAMF(null)).to.deep.equal(nullFixture);
	});
	
	it('decodes null', () => {
		return expect(fromAMF(nullFixture)).to.deep.equal(null);
	});
});
