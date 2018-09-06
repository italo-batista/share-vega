/**
 * Constants for root endpoints.
 * Author:  Italo Batista, italohmb@gmail.com
 * Last change: 09/2018
 */
const API = '/api';
const VISUALIZATION = API + '/visualization';

class Endpoint {
  static get VISUALIZATION() {
    return VISUALIZATION;
  }
}

/**
 * Module exports.
 */

module.exports = Endpoint;
