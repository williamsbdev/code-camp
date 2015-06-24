import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return [
            {
                id: 1,
                speaker: "Brandon Williams",
                session: "Ember CLI"
            },
            {
                id: 2,
                speaker: "Ryan Doll",
                session: "Intro to Ember"
            }
        ];
    }
});
