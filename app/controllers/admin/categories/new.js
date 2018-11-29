import Controller from '@ember/controller';

export default Controller.extend({
  name: '',
  actions: {
    createCategory(name) {
      let newCategory = this.store.createRecord('category', {
        name: name
      });
      newCategory.save().then(() => {
        this.set('name', ''); // this doesn't work on the route!
        this.transitionToRoute('admin.categories'); 
      });
    }
  }
});
