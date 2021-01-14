const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const { number } = require('../fixtures/types');
const numberFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'number.bin'));

describe('number', () => {
	it('encodes number', () => {
		return expect(toAMF(number)).to.deep.equal(numberFixture);
	});
	
	it('decodes number', () => {
		return expect(fromAMF(numberFixture)).to.deep.equal(number);
	});
});
