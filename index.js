var multiBind = require('./multiBind')

module.exports = self => {
	for (const key of Object.getOwnPropertyNames(self.constructor.prototype)) {
		const val = self[key];

		if (key !== 'constructor' && typeof val === 'function') {
			self[key] = multiBind(val, self);
		}
	}
	return self;
};
