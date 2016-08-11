import Ember from 'ember';

export default Ember.Route.extend({

  // Route Hooks: beforeModel(), model(), afterModel(), setupController()
  // Route Actions: actions: { willTransition(), didTransition() }

  beforeModel: function() {
    this.transitionTo('posts');
  }
});
