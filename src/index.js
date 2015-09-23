var cards = require('./cards.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
	all : cards ,
	random :uniqueRandomArray(cards)
};
