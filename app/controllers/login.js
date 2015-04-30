import Ember from "ember";

var LoginController = Ember.Controller.extend({
    actions: {
        login: function() {
            this.transitionTo("sessions");
        }
    }
});

export default LoginController;
