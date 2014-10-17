/**
 * An example BDD-style test.
 */

var supertest = require('supertest');
var app = require('../app').app;
var request = supertest(app);

describe('With the real test API', function(){
  it('should return a response from the foo service', function(done){
    request
      .get('/api/foo')
      .end(function(err, resp){
        resp.text.should.equal('Response from foo_service: [done!]');
        resp.should.have.status(200);
        done();
      });
  });
});