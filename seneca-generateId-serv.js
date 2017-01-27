const seneca = require('seneca')();
const senecaWeb = require('seneca-web');
const express = require('express')();
const adapter = require('seneca-web-adapter-express');
const setting  = require('./config/setting');
const plugin = require('./seneca-generateId-plugin');

// plugin use    ------------------------------------------
seneca.use(plugin.randomIdPlugin);

seneca.use(plugin.timestampIdPlugin);

seneca.use(plugin.uuIdPlugin);

seneca.use(plugin.randomKeyPlugin);

seneca.use(plugin.randomKey2Plugin);

seneca.use(plugin.dateKeyPlugin);

// -----------------------------------------------------
// set routes
let Routes = [
  {
    prefix : '/',
    pin : 'role:generator,cmd:*',
    map : {
      randomId : {
        GET : true,
        POST : true,
        name : 'id/random'
      },
      timestampId : {
        GET : true,
        POST : true,
        name : 'timestamp'
      },
      randomKey : {
        GET : true,
        POST : true,
        suffix : "/:length",
        name : 'key/random'
      },
      randomKey2: {
        GET : true,
        POST : true,
        name : 'random'
      },
      dateKey : {
        GET : true,
        POST : true,
        name : 'date/random'
      },
      uuId : {
        GET : true,
        POST : true,
        name : 'uuid'
      }
    }
  }
];

// -----------------------------------------------------
// set web apps config
const configure = {
  context : express,
  adapter : adapter,
  routes  : Routes
}
// use seneca-web
seneca.use(senecaWeb,configure);
// web app ready
seneca.ready(()=>{
  let app = seneca.export('web/context')();
  app.listen(setting.PORT,()=>{
    console.log('http://localhost:' + setting.PORT + ' .. started..')
  });
});
