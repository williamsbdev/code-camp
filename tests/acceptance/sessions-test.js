import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'code-camp/tests/helpers/start-app';

var application;

module('Acceptance: Sessions', {
  beforeEach: function() {
    application = startApp();
  },
  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /sessions will display all sessions', function(assert) {
  visit('/sessions');
  andThen(function() {
    assert.equal(currentURL(), '/sessions');
    assert.equal(find('.session').length, 2);
    assert.equal(find('.session:eq(0)').text(), 'Ember.js');
    assert.equal(find('.session:eq(1)').text(), 'Spring Boot');
  });
});
