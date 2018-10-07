process.env.NODE_ENV = "test";

const server = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);

const endpoint = require("../../../constants/endpoint");
const HttpStatus = require("../../../constants/httpStatus");
const VisStoreClient = require("./vis.store.client");
const UserStoreClient = require("./../user/user.store.client");

const FAKE_USER_ID = "baf890435jfks";
const FAKE_GIST_LINK = "https://gist.github.com/user/id";

const createMockedUser = async function() {
  let mockedUserParams = {
    name: "fake-name",
    username: "fake-username",
    email: "user@email.com",
    password: "fake-password"
  };
  let createdMockedUser = await UserStoreClient.createUser(mockedUserParams);
  return createdMockedUser;
};

describe("Visualization", async () => {
  let mockedVisNonexistentUser = {
    creator: FAKE_USER_ID,
    imdb_id: FAKE_GIST_LINK
  };

  let mockedVisWithoutRequiredParams = {
    creator: FAKE_USER_ID
  };

  // delete all visualizations and users in test db before each test
  beforeEach(async () => {
    await VisStoreClient.deleteVisz();
    await UserStoreClient.deleteUsers();
  });

  // delete all users in test db before after test
  afterEach(async () => {
    await UserStoreClient.deleteUsers();
  });

  describe("GET /visualization", function() {
    it("Test get visualizations when there is no one", function(done) {
      chai
        .request(server)
        .get(endpoint.VISUALIZATION)
        .end(function(error, res) {
          res.should.have.status(HttpStatus.OK);
          res.body.should.be.a("array");
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe("POST /visualization", () => {
    it("Visualization should not be created and return http status 400", done => {
      chai
        .request(server)
        .post(endpoint.VISUALIZATION)
        .send(mockedVisWithoutRequiredParams)
        .end((err, res) => {
          res.should.have.status(HttpStatus.BAD_REQUEST);
          done();
        });
    });

    it("Visualization should not be created because creator is invalid", done => {
      chai
        .request(server)
        .post(endpoint.VISUALIZATION)
        .send(mockedVisNonexistentUser)
        .end((err, res) => {
          res.should.have.status(HttpStatus.BAD_REQUEST);
          done();
        });
    });

    it("Visualization should be created", done => {
      (async () => {
        let mockedUser = await createMockedUser();

        let mockedCorrectVis = {
          creator: mockedUser._id,
          gist_link: FAKE_GIST_LINK
        };

        chai
          .request(server)
          .post(endpoint.VISUALIZATION)
          .send(mockedCorrectVis)
          .end((err, res) => {
            res.should.have.status(HttpStatus.OK);
            res.body.should.be.a("object");

            // test if createdVis has all Vis model attrs
            let visAttrs = VisStoreClient.getVisAttrs();
            visAttrs.forEach(function(attr) {
              res.body.should.have.property(attr);
            });

            done();
          });
      })(); // ends async anon function
    }); // ends 2nd inner describe
  });
});
