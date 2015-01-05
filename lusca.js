'use strict';
var utils = require('magic-utils')
;

//middleware function
module.exports = function (req, res, next) {
  var app            = req.app
    , luscaOptions   = app.get('lusca')
    , defaultOptions = {}
  ;

  if ( typeof lusca === 'object' ) {
    var options = {};

    utils.each(defaultOptions, function (option, key) {
      options[key] = option;
    });
    utils.log('magic-lusca', 'options', options);
  }

  next();
}
