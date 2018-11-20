import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.findRecord('tag', params.photo_id);
  },
  
  actions: {
    editTag(tag) {
      if (tag.hasDirtyAttributes) {
        console.log("Dirty!");
        console.log(tag.changedAttributes());
        tag.save().then(() => {
          this.transitionTo('admin.tags');
        });
      } else {
        console.log("nothin");
      }
    },
    deleteTag(tag) {
      
    }
  }
});
