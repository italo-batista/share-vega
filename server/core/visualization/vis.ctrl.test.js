/**
 * Test for API /visualization endpoint.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */

process.env.NODE_ENV = 'test';

const server = require('../../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
chai.use(chaiHttp);
const endpoint = require('../../constants/endpoint');
const HttpStatus = require('../../constants/httpStatus');


describe('Visualization', () => {
  
  /*
   * Test the /GET visualization
   */
  describe('/GET visualization', function() {
    it('For now, this endpoints return mocked response (a default message).', function(done) {
      chai.request(server)
        .get(endpoint.VISUALIZATION)
        .end(function(error, res) {
          res.should.have.status(HttpStatus.OK);
          res.body.should.be.a('string');
          res.body.length.should.be.eql(35);
          done();
        });
    });
  });
});