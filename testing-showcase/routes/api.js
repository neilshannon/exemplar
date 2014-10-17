var foo_service = require('../services/foo');

exports.getFoo = function(req, res){
  foo_service.foo_function(function(foo_errors, foo_response){
    if(foo_errors){
      res.send(500, 'An error occurred: [' + foo_errors + ']');
    }
    else{
      res.send(200, 'Response from foo_service: [' + foo_response + ']');
    }
  });
};