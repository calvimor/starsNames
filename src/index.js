var uniqueRandomArray = require('unique-random-array');
var starWarsNames = require('./starwars-names.json');
var testingGit = {};

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};
