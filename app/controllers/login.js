import Ember from "ember";
import PromiseMixin from "ember-promise/mixins/promise";

var LoginController = Ember.Controller.extend({
    actions: {
        login: function() {
            var self = this;
            PromiseMixin.xhr("/api/login", "POST").then(function(){
                self.transitionToRoute("sessions");
            });
        }
    }
});

export default LoginController;
