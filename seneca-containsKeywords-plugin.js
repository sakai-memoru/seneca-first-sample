const actionSet = require('./containsKeywords.js').actionSet;
const seneca = require('seneca')();


function contains(options){
  this.add(actionSet.pattern,actionSet.callback);
};

module.exports = contains;

//seneca.use(contains)
//  .act(rolecmd,{message:'Hello',sceneCode:'SAY_HELLO'},console.log);
