const plugin = require('./seneca-containsKeywords-plugin.js');
const setting  = require('./setting');
const Routes = require('./setting-routes.js').Routes;

const seneca = require('seneca')();
const web = require('seneca-web');
const express = require('express')();
const adapter = require('seneca-web-adapter-express');

let configure = {
  context : express,
  adapter : adapter,
  routes  : Routes
};

seneca.use(plugin);
seneca.use(web,configure);

seneca.ready(()=>{
  const appserver = seneca.export('web/context')();
  appserver.listen(setting.PORT,()=>{
    console.log('micro service on port : ' + setting.PORT + ' ... with seneca-web and express.');
  });

});

