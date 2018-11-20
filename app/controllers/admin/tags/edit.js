import Controller from '@ember/controller';
import ObjectProxy from '@ember/object/proxy';
import { computed } from '@ember/object';

export default Controller.extend({
  // use a proxy so the model doesn't get updated behind the modal while we're editing
  proxy: computed('model', function() {
    return ObjectProxy.create({name: this.model.name});
  }),
  
  actions: {
    editTag(proxy) {
      let tag = this.model;
      tag.set('name', proxy.name);
      tag.save().then(() => {
        this.transitionToRoute('admin.tags');
      });
    },
    deleteTag(tag) {
      tag.destroyRecord().then(() => {
        this.transitionToRoute('admin.tags');
      });
    }
  }
});
