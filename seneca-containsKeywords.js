const seneca = require('seneca')();
const contains = require('./containsKeywords.js').containsKeywords;

let rolecmd = {
  role : 'web',
  cmd  : 'containsKeywords'
}


seneca.add(rolecmd, (msg_obj,response_cb) =>{
  let retVal = contains(msg_obj.message,msg_obj.sceneCode);
  let err = null;
  response_cb(err, {'retVal' : retVal});
}).listen(3000);


// debug ----------------------
// ----------------------------
// let sentence = 'Good morning,how are you?';
// let sceneCode = 'SAY_HELLO';
// let param = {
//   "message" : sentence,
//   "sceneCode" : sceneCode
// }
// 
// seneca.act(rolecmd,param,function(err,result_obj){
//   if(err) return console.error(err);
//   console.log("result_obj = " + result_obj.retVal);
// });
// 
