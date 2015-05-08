module.exports = function(app) {
  var express = require('express');
  var loginRouter = express.Router();

  loginRouter.get('/', function(req, res) {
    res.send({
      'login': []
    });
  });

  loginRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  loginRouter.get('/:id', function(req, res) {
    res.send({
      'login': {
        id: req.params.id
      }
    });
  });

  loginRouter.put('/:id', function(req, res) {
    res.send({
      'login': {
        id: req.params.id
      }
    });
  });

  loginRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/login', loginRouter);
};
