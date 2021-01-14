const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const { date } = require('../fixtures/types');
const dateFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'date.bin'));

describe('date', () => {
	it('encodes date', () => {
		return expect(toAMF(date)).to.deep.equal(dateFixture);
	});
	
	it('decodes date', () => {
		return expect(fromAMF(dateFixture)).to.deep.equal(date);
	});
});
