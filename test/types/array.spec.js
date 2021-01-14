const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const { array } = require('../fixtures/types');
const arrayFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'array.bin'));

describe('array', () => {
	it('encodes array', () => {
		return expect(toAMF(array)).to.deep.equal(arrayFixture);
	});
	
	it('decodes array', () => {
		return expect(fromAMF(arrayFixture)).to.deep.equal(array);
	});
});
