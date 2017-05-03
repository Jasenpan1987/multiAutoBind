
var multiAutoBind = require('./index');
var multiBind = require('./multiBind');

class Unicorn {
	constructor(name) {
		this.name = name;
		multiAutoBind(this);
	}
	message() {
		return `${this.name} is awesome!`;
	}
}

const unicorn = new Unicorn('Rainbow');

const message1 = unicorn.message;

const message2 = unicorn.message.bind({name: "FOOO"}); // this doesn't work anymore
const message3 = multiBind(message1, {name: "FOO"}); // you can bind a function multiple times and each time the 'this' will be different
// console.log('', message3)
const originMessageFunc = message3.getOriginalFunc(); // get back the original function

console.log(message2({ name: "FOOOOOO"}));
console.log(message3({ name: "FOOOOOO"}));
console.log(originMessageFunc.call({name: "BARRRRRRRR"}))
