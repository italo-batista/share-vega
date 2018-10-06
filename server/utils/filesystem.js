const fs = require("fs");
const path = require("path");

/**
 * List all files in a directory recursively in a synchronous fashion.
 *
 * @param {String} dir
 * @returns {IterableIterator<String>}
 */
exports.getFilesWithPattern = function* walkSync(dir, pattern) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const pathToFile = path.join(dir, file);
    const isDirectory = fs.statSync(pathToFile).isDirectory();
    if (isDirectory) {
      yield* walkSync(pathToFile, pattern);
    } else {
      if (pathToFile.includes(pattern)) {
        yield pathToFile;
      }
    }
  }
};
