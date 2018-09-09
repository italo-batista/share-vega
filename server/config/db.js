const mongoUris = {
  url: "mongodb://localhost/share-vega",
  local_url: "mongodb://localhost/share-vega",
  test_url: "mongodb://localhost/share-vega-test"
};

exports.getMongoUri = function(ENV) {
  if (ENV == "production") {
    console.log("Returning mongo uri for production mode!");
    return mongoUris["url"];
  } else if (ENV == "development") {
    console.log("Returning mongo uri for development mode!");
    return mongoUris["local_url"];
  } else if (ENV == "test") {
    console.log("Returning mongo uri for test mode!");
    return mongoUris["test_url"];
  }
};

exports.mongooseOpts = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000
};
