import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model() {
    return RSVP.hash({
      categories: this.store.findAll('category'),
      tags:       this.store.findAll('tag')
    });
  }
});
