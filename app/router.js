import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('login', {path: '/login'});
  this.route('sessions', {path: '/sessions'}, function() {
      this.route('session', {path: '/:session_id'});
  });
});
