import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'code-camp/tests/helpers/start-app';

var application;

module('Acceptance: Login', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('login will transition user to sessions route', function(assert) {
  visit('/login');
  andThen(function() {
    assert.equal(currentURL(), '/login');
    assert.equal(find(".password").attr("type"), "password");
  });
  fillIn("#username", "user");
  fillIn(".password", "password");
  click("#login");
  andThen(function() {
      assert.equal(currentURL(), "/sessions");
  });
});
