// module import ------------------------------------------
// generate random id 
const randomId = require('./lib/generateId').randomId;
let ptnStrrandomId = 'role:generator,cmd:randomId';

// make plugin 
let resultRandomId = (msg_obj,response_cb)=>{
  response_cb(null,{id : randomId()});
};

function randomIdPlugin(){
  this.add(ptnStrrandomId,resultRandomId);
}

// module exports
module.exports.randomIdPlugin = randomIdPlugin;

// module import ------------------------------------------
// generate timestamp
const timestampId = require('./lib/generateId').timestampId;
let ptnStrTimestampId = 'role:generator,cmd:timestampId';

// make plugin 
let resultTimestampId = (msg_obj,response_cb)=>{
  response_cb(null,{id : timestampId()});
};

function timestampIdPlugin(){
  this.add(ptnStrTimestampId,resultTimestampId);
}

// module exports
module.exports.timestampIdPlugin= timestampIdPlugin;

// module import ------------------------------------------
// generate uuid
const uuId = require('./lib/generateId').uuId;
let ptnStrUuId = 'role:generator,cmd:uuId';

// make plugin 
let resultUuId = (msg_obj,response_cb)=>{
  response_cb(null,{id : uuId()});
};

function uuIdPlugin(){
  this.add(ptnStrUuId,resultUuId);
}

// module exports
module.exports.uuIdPlugin= uuIdPlugin;

// module import ------------------------------------------
// generate random key
const randomKey = require('./lib/generateId').randomKey;
let ptnStrRandomKey = 'role:generator,cmd:randomKey';

// make plugin 
let resultRandomKey = (msg_obj,response_cb)=>{
  response_cb(null,{id : randomKey(msg_obj.args.params.length)});
};

function randomKeyPlugin(){
  this.add(ptnStrRandomKey,resultRandomKey);
}

// module exports
module.exports.randomKeyPlugin= randomKeyPlugin;

// module import ------------------------------------------
// generate random key2
const randomKey2 = require('./lib/generateId').randomKey;
let ptnStrRandomKey2 = 'role:generator,cmd:randomKey2';

// make plugin 
let resultRandomKey2 = (msg_obj,response_cb)=>{
  // console.log(msg_obj);
  response_cb(null,{id : randomKey2(msg_obj.args.query.length)});
};

function randomKey2Plugin(){
  this.add(ptnStrRandomKey2,resultRandomKey2);
}

// module exports
module.exports.randomKey2Plugin= randomKey2Plugin;

// module import ------------------------------------------
// generate date key
const dateKey = require('./lib/generateId').dateKey;

let ptnStrDateKey = 'role:generator,cmd:dateKey';

// make plugin 
let resultDateKey = (msg_obj,response_cb)=>{
  // console.log(msg_obj);
  response_cb(null,{id : dateKey()});
};

function dateKeyPlugin(){
  this.add(ptnStrDateKey,resultDateKey);
}

// module exports
module.exports.dateKeyPlugin= dateKeyPlugin;

