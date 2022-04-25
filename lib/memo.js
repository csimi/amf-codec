module.exports = class Memo {
	constructor (position = 0) {
		this.position = position;
		this.references = [];
	}
	
	consume (amount) {
		const position = this.position;
		this.position += amount;
		return position;
	}
	
	skip (amount) {
		this.position += amount;
		return this.position;
	}
};
