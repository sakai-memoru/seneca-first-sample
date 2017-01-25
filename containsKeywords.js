/**
 * @fileoverview message based module
 */
const XRegEx = require('xregexp');
const config = require('config');
let wordMap = config.get('keywords');


/**
 * @function containsKeywords
 * @param message {string}
 * @param sceneCode {string}
 * @return hasWords {boolean}
 */
var containsKeywords = (message,sceneCode) => {
  let keywords = wordMap[sceneCode];
  let pattern = XRegEx(keywords.join('|'));
  return pattern.test(message);

};

module.exports.containsKeywords = containsKeywords;

// debug --------------------------
// --------------------------------
// let retVal = containsKeywords('Hello,momochi','SAY_HELLO');
// console.log(retVal);

