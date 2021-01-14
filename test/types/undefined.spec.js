const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const undefinedFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'undefined.bin'));

describe('undefined', () => {
	it('encodes undefined', () => {
		return expect(toAMF(undefined)).to.deep.equal(undefinedFixture);
	});
	
	it('decodes undefined', () => {
		return expect(fromAMF(undefinedFixture)).to.deep.equal(undefined);
	});
});
