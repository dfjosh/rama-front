import Controller from '@ember/controller';

export default Controller.extend({
  name: '',
  actions: {
    createTag(name) {
      let newTag = this.store.createRecord('tag', {
        name: name
      });
      newTag.save().then(() => {
        this.set('name', ''); // this doesn't work on the route!
        this.transitionToRoute('admin.tags'); 
      });
    },
    editTag(tag) {
      
    },
    deleteTag(tag) {
      
    }
  }
});
