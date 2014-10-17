/**
 *  An example BDD-style test with external dependencies stubbed out using sinon.
 */

var supertest = require('supertest');
var app = require('../app').app;
var sinon = require('sinon');
var request = supertest(app);
var foo_service = require('../services/foo');

describe('With the stubbed test API', function(){

  before(function(){
    /**
     * Sinon replaces the foo_function on foo_service with a stub.  The yields
     * function application indicates we want to call the first callback argument
     * supplied to foo_function with undefined and 'STUBBED RESPONSE!' as arguments.
     */
    sinon.stub(foo_service, 'foo_function').yields(undefined, 'STUBBED RESPONSE!');
  });

  after(function(){
    /**
     * This call restores the original foo_function on foo_service with its original
     * implementation.
     */
    foo_service.foo_function.restore();
  });

  it('should return a response from the foo service', function(done){
    request
      .get('/api/foo')
      .end(function(err, resp){
        resp.text.should.not.be.empty;
        resp.should.have.status(200);
        done();
      });
  });
  it('should return an error from the foo service if an error occurs', function(done){
    /**
     * Here we use sinon to override the behavior of foo_function to simulate an error condition.
     */
    foo_service.foo_function.yields('Oops!', undefined);

    request
      .get('/api/foo')
      .end(function(err, resp){
        resp.text.should.not.be.empty;
        resp.should.have.status(500);
        done();
      });
   });
});