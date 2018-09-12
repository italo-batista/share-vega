/**
 * Constants for root endpoints.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */
const API = "/api";
const VISUALIZATION = API + "/visualization";
const USER = API + "/user";

class Endpoint {
  static get VISUALIZATION() {
    return VISUALIZATION;
  }
  static get USER() {
    return USER;
  }
}

/**
 * Module exports.
 */

module.exports = Endpoint;
