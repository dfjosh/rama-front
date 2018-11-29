import Controller from '@ember/controller';
import ObjectProxy from '@ember/object/proxy';
import { computed } from '@ember/object';

export default Controller.extend({
  // use a proxy so the model doesn't get updated behind the modal while we're editing
  proxy: computed('model', function() {
    return ObjectProxy.create({name: this.model.name});
  }),
  
  actions: {
    editCategory(proxy) {
      let category = this.model;
      category.set('name', proxy.name);
      category.save().then(() => {
        this.transitionToRoute('admin.categories');
      });
    },
    deleteCategory(category) {
      category.destroyRecord().then(() => {
        this.transitionToRoute('admin.categories');
      });
    }
  }
});
