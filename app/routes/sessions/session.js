import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";

var SessionRoute = Ember.Route.extend({
    model: function(params) {
        return PromiseMixin.xhr("/api/sessions/" + params.session_id);
    }
});

export default SessionRoute;
