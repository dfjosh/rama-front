import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  name: null,
  
  actions: {
    createTag() {
      let newTag = this.get('store').createRecord('tag', {
        name: this.get('name')
      });
      newTag.save().then(() => {
        $('#createTagModal').modal('hide');
        this.set('name', null);
      });
    },
    editTag(tag) {
      
    },
    deleteTag(tag) {
      
    }
  }
});
