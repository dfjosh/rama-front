import Controller from '@ember/controller';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.selectedCategories = [];
  },
  
  title: null,
  body: null,

  actions: {
    addCategory(selectedCategory) {
      this.selectedCategories.pushObject(selectedCategory);
      let idx = this.model.categories.indexOf(selectedCategory);
      console.log(this.model.categories.length);
      this.model.categories.toArray().removeObject(selectedCategory);
      console.log(this.model.categories.length);
      // this.model.categories.notifyPropertyChange();
    },
    publishPost() {
      var post = this.store.createRecord('post', {
        title: this.title,
        body:  this.body
      });
      post.save().then(() => {
        this.setProperties({
          title: null,
          body: null
        });
        this.transitionToRoute('posts');
      });
    }
  }
});
