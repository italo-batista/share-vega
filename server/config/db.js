const mongoUris = {
  url: "mongodb://localhost/share-vega",
  local_url: "mongodb://localhost/share-vega",
  test_url: "mongodb://localhost/share-vega-test"
};

exports.getMongoUri = function() {
  let mongoUri;
  let ENV = process.env.NODE_ENV;
  let logMsg = `\nReturning mongo uri for ${ENV} mode!\n`;

  if (ENV == "production") {
    mongoUri = mongoUris["url"];
  } else if (ENV == "development") {
    mongoUri = mongoUris["local_url"];
  } else if (ENV == "test") {
    mongoUri = mongoUris["test_url"];
  }
  console.log(logMsg);
  return mongoUri;
};

exports.mongooseOpts = {
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 1000,
  useNewUrlParser: true
};
