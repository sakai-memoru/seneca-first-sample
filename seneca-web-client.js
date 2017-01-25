const seneca = require('seneca')();

seneca.client({port:3000,host:'localhost'})
  .act('role:web,cmd:containsKeywords,message:sakai',console.log);
