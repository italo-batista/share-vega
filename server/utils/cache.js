const cache = require("memory-cache");

convertSecToMicroSec = function(seconds) {
  return seconds * 1000000;
};

/**
 * Put a pair key, value in cache. It is possible to pass as param
 * time (in seconds) to the pair disappears.
 *
 * @param {String} key
 * @param {String} value
 * @param {int} timeToDisappear
 */
exports.putInCache = function(key, value, timeToDisappear) {
  if (timeToDisappear !== undefined) {
    let timeToDisappearMicroSecs = convertSecToMicroSec(timeToDisappear);
    cache.put(key, value, timeToDisappearMicroSecs);
  } else {
    cache.put(key, value);
  }
  console.log("Caching key [" + key + "] with value [" + value + "]");
};

/**
 * Given a key, get value from cache.
 *
 * @param {String} key
 * @returns {String}
 */
exports.getFromCache = function(key) {
  let value = cache.get(key);
  if (value !== null) {
    console.log(
      "Returning value [" + value + "] from cache given key [" + key + "]"
    );
  } else {
    console.log(
      "There is no value in cache for key " +
        key +
        " or key disappeared. Returning null."
    );
  }
  return value;
};
