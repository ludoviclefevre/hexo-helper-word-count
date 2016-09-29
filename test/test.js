'use strict';

var path = require('path'),
  chai = require('chai'),
  assert = chai.assert,
  Promise = require('bluebird'),
  fs = Promise.promisifyAll(require('fs')),
  helper = require('../lib/helper');

var readFileOptions = {
  encoding: 'utf8'
};

var getContent = function () {
  var filePath = path.join(__dirname, 'fixtures', '200Words.txt');
  return fs.readFileAsync(filePath, readFileOptions);
};

var wordCount = function (content) {
  return helper(content);
};

var assertHas200Words = function (result) {
  assert.equal(result, 200);
};

describe('Hexo Helper Word Count', function () {
  it('should count 200 words', function () {
    return getContent()
      .then(wordCount)
      .then(assertHas200Words);
  });
});
