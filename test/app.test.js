const app = require('./../server/app');
const request = require('supertest');
const endpoint = require('./../server/api/constants/endpoint');

request(app)
  .get(endpoint.VISUALIZATION)
  .expect('Content-Type', /json/)
  .expect('Content-Length', '15')
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });