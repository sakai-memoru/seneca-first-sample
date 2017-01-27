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
  let pattern = XRegEx(keywords.join('|'),'i');
  return pattern.test(message);

};

function result_cb(msg_obj,response_cb){
  console.log(msg_obj.args.query);
  let err = null;
  let retVal = containsKeywords(msg_obj.args.query.message,msg_obj.args.query.sceneCode);
  response_cb(err, {'retVal' : retVal});
}

let rolecmd = {
  role : 'engagement',
  cmd  : 'containsKeywords'
}

module.exports.containsKeywords = containsKeywords;

module.exports.actionSet = {
  pattern  : rolecmd,
  callback : result_cb
};

// debug --------------------------
// --------------------------------
// let retVal = containsKeywords('Hello,momochi','SAY_HELLO');
// console.log(retVal);

