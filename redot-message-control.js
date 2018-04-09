"use strict";

var control = require("unified-message-control");
var xtend = require("xtend");

function marker() {
  return null;
}

module.exports = function messageControl(options) {
  var settings = options || {};

  return control(
    xtend(options, {
      marker: settings.marker || marker,
      test: settings.test || "comment"
    })
  );
};
