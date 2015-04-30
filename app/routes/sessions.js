import Ember from "ember";

var SessionsRoute = Ember.Route.extend({
    model: function() {
        var one = {name: "Ember.js"};
        var two = {name: "Spring Boot"};
        return [one, two];
    }
});

export default SessionsRoute;
