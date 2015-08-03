import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'code-camp/tests/helpers/start-app';

module('Acceptance | dashboard', {
    beforeEach: function() {
        this.application = startApp();
    },
    afterEach: function() {
        Ember.$.fauxjax.clear();
        Ember.run(this.application, 'destroy');
    }
});

test('visiting /dashboard', function(assert) {
    Ember.$.fauxjax.new({
        request: {
            url: "/api/sessions",
            method: "GET"
        },
        response: {
            status: 200,
            content: [ {
                id: "1",
                speaker: "Brandon Williams",
                favorite_color: "blue",
                session: "Ember"
            },
            {
                id: "2",
                speaker: "Darrin Holst",
                favorite_color: "green",
                session: "Angular"
            } ]
        }
    });
    visit('/dashboard');
    andThen(function() {
        assert.equal(currentURL(), '/dashboard');
        assert.equal(find('.speaker').length, 2);
    });
});

test('clicking speaker will show details of that speaker', function(assert) {
    Ember.$.fauxjax.new({
        request: {
            url: "/api/sessions",
            method: "GET"
        },
        response: {
            status: 200,
            content: [ {
                id: "1",
                speaker: "Brandon Williams",
                favorite_color: "blue",
                session: "Ember"
            },
            {
                id: "2",
                speaker: "Darrin Holst",
                favorite_color: "green",
                session: "Angular"
            } ]
        }
    });
    visit('/dashboard');
    andThen(function() {
        assert.equal(currentURL(), '/dashboard');
    });
    click('.speaker:eq(0)');
    andThen(function() {
        assert.equal(currentURL(), '/dashboard/speaker/1');
        assert.equal(find('.favorite-color').text(), 'blue');
    });
});
