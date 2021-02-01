const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const {
	empty,
	dense,
	sparse,
} = require('../fixtures/array');
const emptyArrayFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'array-empty.bin'));
const denseArrayFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'array-dense.bin'));
const sparseArrayFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'array-sparse.bin'));

describe('array', () => {
	it('encodes empty array', () => {
		return expect(toAMF(empty)).to.deep.equal(emptyArrayFixture);
	});
	
	it('encodes dense array', () => {
		return expect(toAMF(dense)).to.deep.equal(denseArrayFixture);
	});
	
	it('encodes sparse array', () => {
		return expect(toAMF(sparse)).to.deep.equal(sparseArrayFixture);
	});
	
	it('decodes empty array', () => {
		return expect(fromAMF(emptyArrayFixture)).to.deep.equal(empty);
	});
	
	it('decodes dense array', () => {
		return expect(fromAMF(denseArrayFixture)).to.deep.equal(dense);
	});
	
	it('decodes sparse array', () => {
		return expect(fromAMF(sparseArrayFixture)).to.deep.equal(sparse);
	});
});
