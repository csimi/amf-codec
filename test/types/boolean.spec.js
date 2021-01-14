const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const falseFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'false.bin'));
const trueFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'true.bin'));

describe('boolean', () => {
	it('encodes false', () => {
		return expect(toAMF(false)).to.deep.equal(falseFixture);
	});
	
	it('decodes false', () => {
		return expect(fromAMF(falseFixture)).to.deep.equal(false);
	});
	
	it('encodes true', () => {
		return expect(toAMF(true)).to.deep.equal(trueFixture);
	});
	
	it('decodes true', () => {
		return expect(fromAMF(trueFixture)).to.deep.equal(true);
	});
});
