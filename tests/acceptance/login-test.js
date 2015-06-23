import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'code-camp/tests/helpers/start-app';

var application;

module('Acceptance | login', {
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
    });
    fillIn('.username', 'bob');
    fillIn('.password', 'thebuilder');
    click('.login');
    andThen(function() {
        assert.equal(currentURL(), '/dashboard');
    });
});
