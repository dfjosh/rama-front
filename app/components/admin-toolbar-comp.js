import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  classNames: ['admin-toolbar-comp'],
  
  store: service(),
  
  newPost: computed(function() {
    return this.store.createRecord('post');
  })
});