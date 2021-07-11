const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const { object } = require('../fixtures/types');
const objectFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'object.bin'));
const ecmaArrayFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'ecma-array.bin'));
const typedObjectFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'typed-object.bin'));

describe('object', () => {
	it('encodes object', () => {
		return expect(toAMF(object)).to.deep.equal(objectFixture);
	});
	
	it('decodes object', () => {
		return expect(fromAMF(objectFixture)).to.deep.equal(object);
	});
	
	it('decodes ecma array', () => {
		return expect(fromAMF(ecmaArrayFixture)).to.deep.equal(object);
	});
	
	it('decodes typed object', () => {
		return expect(fromAMF(typedObjectFixture)).to.deep.equal(object);
	});
});
