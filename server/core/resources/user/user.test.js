process.env.NODE_ENV = "test";

const server = require("../../../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);

const endpoint = require("../../../constants/endpoint");
const HttpStatus = require("../../../constants/httpStatus");
const UserStoreClient = require("./../user/user.store.client");

const FAKE_USER_NAME = "fake-user";
const FAKE_USER_USERNAME = "fake-username";
const FAKE_USER_EMAIL = "user@email.com";
const FAKE_USER_PASS = "fake-password";

let mockedCorrectUser = {
  name: FAKE_USER_NAME,
  username: FAKE_USER_USERNAME,
  email: FAKE_USER_EMAIL,
  password: FAKE_USER_PASS
};

let mockedUserWithoutRequiredParams = {
  username: FAKE_USER_USERNAME,
  password: FAKE_USER_PASS
};

const createMockedUser = async function(mockedUser) {
  let createdMockedUser = await UserStoreClient.createUser(mockedUser);
  return createdMockedUser;
};

describe("User", async () => {
  // delete all users in test db before each test
  beforeEach(async () => {
    await UserStoreClient.deleteUsers();
  });

  describe("POST /user", () => {
    it("User should not be created and return http status 400", done => {
      chai
        .request(server)
        .post(endpoint.USER)
        .send(mockedUserWithoutRequiredParams)
        .end((err, res) => {
          res.should.have.status(HttpStatus.BAD_REQUEST);
          done();
        });
    });

    it("User should be created", done => {
      chai
        .request(server)
        .post(endpoint.USER)
        .send(mockedCorrectUser)
        .end((err, res) => {
          res.should.have.status(HttpStatus.OK);
          res.body.should.be.a("object");
          res.body.name.should.equal(FAKE_USER_NAME);
          res.body.username.should.equal(FAKE_USER_USERNAME);
          res.body.email.should.equal(FAKE_USER_EMAIL);
          res.body.should.have.property("password");
          done();
        });
    });

    it("Should list a SINGLE User on /user/<id> GET", done => {
      (async () => {
        // first create user
        let createdUser = await createMockedUser(mockedCorrectUser);

        // compare user returnet to created user
        chai
          .request(server)
          .get(endpoint.USER + "/" + createdUser._id)
          .end(function(err, res) {
            res.should.have.status(HttpStatus.OK);
            res.should.be.json;
            res.body.should.be.a("object");
            res.body.name.should.equal(createdUser.name);
            res.body.username.should.equal(createdUser.username);
            res.body.email.should.equal(createdUser.email);
            res.body.password.should.equal(createdUser.password);

            done();
          });
      })(); // ends async anon function
    });

    it("Should delete a SINGLE user on /user/<id> DELETE", done => {
      (async () => {
        // first create user
        let createdUser = await createMockedUser(mockedCorrectUser);

        chai
          .request(server)
          // delete user created
          .delete(endpoint.USER + "/" + createdUser._id)
          .end(function(err, res) {
            res.should.have.status(HttpStatus.OK);

            chai
              .request(server)
              // try to get user deleted
              .get(endpoint.USER + "/" + createdUser._id)
              .end(function(err, res2) {
                res2.should.have.status(HttpStatus.BAD_REQUEST);
                done();
              });
          });
      })(); // ends async anon function
    });
  });
});
