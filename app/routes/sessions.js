import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";

var SessionsRoute = Ember.Route.extend({
    model: function() {
        var sessions = Ember.A([]);
        PromiseMixin.xhr("/api/sessions").then(function(response) {
            response.forEach(function(session) {
                sessions.pushObject(session);
            });
        });
        return sessions;
    }
});

export default SessionsRoute;
