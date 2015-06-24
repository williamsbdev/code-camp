module.exports = function(app) {
  var express = require('express');
  var sessionsRouter = express.Router();

  sessionsRouter.get('/', function(req, res) {
    res.send(
      [
            {
                id: 1,
                speaker: "Brandon Williams",
                session: "Ember CLI"
            },
            {
                id: 2,
                speaker: "Ryan Doll",
                session: "Intro to Ember"
            }
      ]
    );
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
