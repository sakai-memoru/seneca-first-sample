const containsKeywords = require('./containsKeywords.js').containsKeywords;
const seneca = require('seneca')();

let rolecmd = {
  role : 'web',
  cmd  : 'containsKeywords'
}

function contains(options) {
  this.add(rolecmd, (msg_obj,response_cb) =>{
    console.log(msg_obj.args.query);
    let retVal = containsKeywords(msg_obj.args.query.message,msg_obj.args.query.sceneCode);
    let err = null;
    response_cb(err, {'retVal' : retVal});
  });
  
};

module.exports = contains;

//seneca.use(contains)
//  .act(rolecmd,{message:'Hello',sceneCode:'SAY_HELLO'},console.log);
