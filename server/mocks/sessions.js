module.exports = function(app) {
  var express = require('express');
  var sessionsRouter = express.Router();

  sessionsRouter.get('/', function(req, res) {
    res.send({
      'sessions': [
        {id: 1, name: "Ember.js"},
        {id: 2, name: "Spring Boot"}
      ]
    });
  });

  sessionsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  sessionsRouter.get('/:id', function(req, res) {
    res.send({
      'sessions': {
        id: req.params.id
      }
    });
  });

  sessionsRouter.put('/:id', function(req, res) {
    res.send({
      'sessions': {
        id: req.params.id
      }
    });
  });

  sessionsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/sessions', sessionsRouter);
};
