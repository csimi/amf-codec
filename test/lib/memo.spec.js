const { expect } = require('chai');
const Memo = require('../../lib/memo');

describe('Memo', () => {
	it('starts from a default position of 0', () => {
		const memo = new Memo();
		
		return expect(memo.position).to.equal(0);
	});
	
	it('takes initial position from parameter', () => {
		const memo = new Memo(1);
		
		return expect(memo.position).to.equal(1);
	});

	describe('consume()', () => {
		let memo;
		
		beforeEach(() => {
			memo = new Memo();
		});
		
		it('returns previous position', () => {
			return expect(memo.consume(2)).to.equal(0);
		});
		
		it('increases position by amount of bytes consumed', () => {
			memo.consume(2);
			
			return expect(memo.position).to.equal(2);
		});
	});

	describe('skip()', () => {
		let memo;
		
		beforeEach(() => {
			memo = new Memo();
		});
		
		it('increases position by amount of bytes skipped', () => {
			memo.skip(2);
			
			return expect(memo.position).to.equal(2);
		});
		
		it('returns next position', () => {
			return expect(memo.skip(2)).to.equal(2);
		});
	});
});
