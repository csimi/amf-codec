const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const { string } = require('../fixtures/types');
const stringFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'string.bin'));

describe('string', () => {
	it('encodes string', () => {
		return expect(toAMF(string)).to.deep.equal(stringFixture);
	});
	
	it('decodes string', () => {
		return expect(fromAMF(stringFixture)).to.deep.equal(string);
	});
	
	it('long string', () => {
		const value = string.repeat(65536);
		const data = toAMF(value);
		
		return expect(fromAMF(data)).to.deep.equal(value);
	});
	
	it('multibyte', () => {
		const value = Buffer.from([0xF0, 0x9F, 0xA4, 0x96]).toString();
		const data = toAMF(value);
		
		return expect(fromAMF(data)).to.deep.equal(value);
	});
});
