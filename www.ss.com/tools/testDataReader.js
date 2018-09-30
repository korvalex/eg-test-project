'use strict';

var TestDataReader = Object.create({}, {
    read: { value: function(testName, testDataDirectory) {
        var filename = testName + '.json';
        return require(testDataDirectory + '/' + filename);
    }}
});

module.exports = TestDataReader
