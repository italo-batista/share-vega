const path = require("path");
const swagger = require("swagger-express");
const utilsFs = require("../utils/filesystem");

module.exports = app => {
  let root_path = path.join(__dirname, "../");

  app.use(
    swagger.init(app, {
      apiVersion: "1.0",
      swaggerVersion: "1.0",
      basePath: "http://localhost:3000",
      swaggerURL: "/docs/api",
      swaggerJSON: "/api-docs.json",
      swaggerUI: "public/docs-ui/swagger/",
      apis: Array.from(utilsFs.getFilesWithPattern(root_path, ".doc.js"))
    })
  );
};
