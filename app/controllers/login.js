import Ember from "ember";

var LoginController = Ember.Controller.extend({
    actions: {
        login: function() {
            this.transitionToRoute("sessions");
        }
    }
});

export default LoginController;
