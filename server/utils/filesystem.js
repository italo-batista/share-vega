
const fs = require("fs");
const path = require("path");

/**
 * List all files in a directory recursively in a synchronous fashion.
 *
 * @param {String} dir
 * @returns {IterableIterator<String>}
 */
exports.getRouterFiles = function* walkSync(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const pathToFile = path.join(dir, file);
    const isDirectory = fs.statSync(pathToFile).isDirectory();
    if (isDirectory) {
      yield* walkSync(pathToFile);
    } else {
      if (pathToFile.includes("router")) {
        yield pathToFile;
      }
    }
  }
};
  