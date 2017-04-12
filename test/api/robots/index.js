process.env.NODE_ENV = 'test';

var request = require('supertest'); // source of `.expect()` within a `request` promise chain
var app = require('../../../app.js');

describe('GET /api/robots', function() {
  it('responds with json', function(done) {
    request(app)
      .get('/api/robots.json')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
