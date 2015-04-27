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

test('visiting /login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
    assert.equal(find(".username").length, 1);
    assert.equal(find(".password").length, 1);
    assert.equal(find(".password").attr("type"), "password");
  });
});
