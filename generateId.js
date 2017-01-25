const S = require('string');
const datetime = require('moment');
const uuid = require('uuid');


const randomId = ()=>{
  return S(''+ Math.floor(Math.random()*100000000001)).padLeft(11,'0').s;
}

const uuId = ()=>{
  return uuid.v4();
}

const timestampId = ()=>{
  return datetime().format('YYYYMMDDHHmmss');
}

const randomKey = (length)=>{
  //console.log('length= ' + length);
  return Math.random().toString(36).slice(-parseInt(length));
}

const dateKey = () =>{
  return timestampId().slice(2,8) + '-' + randomKey(6);
};

module.exports.randomId = randomId;
module.exports.uuId = uuId;
module.exports.timestampId = timestampId;
module.exports.randomKey = randomKey;
module.exports.dateKey = dateKey;

// debug ---------------------------
// ---------------------------------
// console.log('ramdom id = ' + ramdomId());
// console.log('universal unique  id = ' + uuId());
// console.log('timestamp = ' + timestampId());
// console.log('random key = ' + randomKey(8));
// console.log(dateKey());
