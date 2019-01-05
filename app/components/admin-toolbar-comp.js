import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['admin-toolbar-comp'],
  
  store: service(),
  session: service(),
  
  newPost: computed(function() {
    return this.store.createRecord('post');
  }),
  
  actions: {
    logout() {
      this.session.invalidate();
    }
  }
});