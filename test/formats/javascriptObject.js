var assert  = require('chai').assert,
  fs = require('fs-extra'),
  helpers = require('../helpers'),
  formats = require('../../lib/common/formats');

var file = {
  "destination": "output/",
  "format": "javascript/object",
  "name": "foo"
};

var dictionary = {
  "properties": {
    "color": {
      "red": {"value": "#FF0000"}
    }
  }
};

var formatter = formats['javascript/object'].bind(file);

describe('formats', function() {
  describe('javascript/module', function() {
    // Can't test a non-node type js file (without module.exports)
    // TODO: figure out how to test this
  });
});
