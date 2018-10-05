const bodyParser = require("body-parser");

module.exports = app => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(function(req, res, next) {
    res.header("Content-Type", "application/json");
    next();
  });
  app.post("/", function(req, res) {
    // Returning to client in response the body request sent by him.
    res.end(JSON.stringify(req.body, null, 2));
  });
};
