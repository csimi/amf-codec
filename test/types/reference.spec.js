const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	fromAMF,
} = require('../..');

const { object } = require('../fixtures/types');
const referenceFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'reference.bin'));

describe('reference', () => {
	it('decodes reference', () => {
		return expect(fromAMF(referenceFixture)).to.deep.equal([
			object,
			object,
		]);
	});
});
