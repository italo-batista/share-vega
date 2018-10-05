/**
 * Constants for root endpoints.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */
const API = "/api";
const VISUALIZATION = API + "/visualization";
const USER = API + "/user";
const AUTH = API + "/auth";

class Endpoint {
  static get VISUALIZATION() {
    return VISUALIZATION;
  }
  static get USER() {
    return USER;
  }
  static get AUTH() {
    return AUTH;
  }
}

module.exports = Endpoint;
