'use strict';
var utils = require('magic-utils')
;

//middleware function
module.exports = function (req, res, next) {
  var app            = req.app
    , luscaOptions   = app.get('lusca')
    , defaultOptions = {}
  ;

  if ( typeof luscaOptions === 'object' ) {
    defaultOptions = utils.mergeConfig(defaultOptions, luscaOptions);
  }
  utils.log('magic-lusca', 'options', defaultOptions);
  
  if ( luscaOptions ) {
    log('magic-lusca', 'lusca should activate now');
  }

  next();
}
