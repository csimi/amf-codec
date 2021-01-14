const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const { object } = require('../fixtures/types');
const objectFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'object.bin'));

describe('object', () => {
	it('encodes object', () => {
		return expect(toAMF(object)).to.deep.equal(objectFixture);
	});
	
	it('decodes object', () => {
		return expect(fromAMF(objectFixture)).to.deep.equal(object);
	});
});
