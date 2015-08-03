import Ember from "ember";

var SpeakerRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('dashboard').filter(function(speaker) {
            return speaker.id === params.id;
        })[0];
    }
});

export default SpeakerRoute;
