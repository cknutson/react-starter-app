'use strict';
const express = require('express'),
      bodyParser = require('body-parser'),
      port = process.env.PORT || 3000;

const initMiddleware = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/', express.static(__dirname+'/../../dist'));
  app.listen(port, () => {
    console.log('Listening on port ' + port);
  });
};

const initAPI = (app) => {
  console.log('Starting API');
  app.get('/ping', (req, res) => {
    res.send('pong');
  });
};

const init = () => {
  const app = express();
  initMiddleware(app);
  initAPI(app);
};

init();
