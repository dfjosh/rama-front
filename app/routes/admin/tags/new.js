import Route from '@ember/routing/route';
// import $ from 'jquery';

export default Route.extend({
  name: '',
  actions: {
    createTag(name) {
      let newTag = this.store.createRecord('tag', {
        name: name
      });
      this.set('name', '');
      newTag.save().then(() => {
        // $('.modal').modal('hide');
        this.transitionTo('admin.tags'); 
      });
    },
    editTag(tag) {
      
    },
    deleteTag(tag) {
      
    }
  }
});
