const { expect } = require('chai');
const fs = require('fs');
const path = require('path');
const {
	toAMF,
	fromAMF,
} = require('../..');

const { object } = require('../fixtures/types');
const { sparse } = require('../fixtures/array');
const objectFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'object.bin'));
const ecmaArrayFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'ecma-array.bin'));
const ecmaObjectFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'ecma-object.bin'));
const typedObjectFixture = fs.readFileSync(path.join(__dirname, '..', 'fixtures', 'typed-object.bin'));

describe('object', () => {
	it('encodes object', () => {
		return expect(toAMF(object)).to.deep.equal(objectFixture);
	});
	
	it('decodes object', () => {
		return expect(fromAMF(objectFixture)).to.deep.equal(object);
	});
	
	it('decodes ecma array', () => {
		return expect(fromAMF(ecmaArrayFixture)).to.deep.equal(sparse);
	});
	
	it('decodes ecma object', () => {
		const arr = Object.entries(object).reduce((accumulator, [key, value]) => {
			accumulator[key] = value;
			return accumulator;
		}, []);
		
		return expect(fromAMF(ecmaObjectFixture)).to.deep.equal(arr);
	});
	
	it('decodes typed object', () => {
		return expect(fromAMF(typedObjectFixture)).to.deep.equal(object);
	});
});
