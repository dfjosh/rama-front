import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.selectedCategories = [];
  },
  
  // title: null,
  // body: null,
  // 
  categories: computed(function() {
    return this.store.findAll('category');
  }),
  
  // availableCategories: computed('categories', function() {
  //   console.log(this.categories);
  //   return this.get('categories').then(cats => {
  //     console.log(cats);
  //     console.log(cats.length);
  //     return cats;
  //   });
  // }),

  tags: computed(function() {
    return this.store.findAll('tag');
  }),
  
  actions: {
    addCategory(selectedCategory) {
      let postCategory = this.store.createRecord('post-category', {
        category: selectedCategory,
        post: this.model
      });
      this.model.postCategories.pushObject(postCategory);
      // this.selectedCategories.pushObject(selectedCategory);
      // let idx = this.categories.indexOf(selectedCategory);
      // console.log(this.categories.length);
      // this.availableCategories.removeObject(selectedCategory);
      // console.log(this.categories.length);
      // // this.model.categories.notifyPropertyChange();
    },
    publishPost() {
      this.model.save().then(post => {
        post.postCategories.forEach(postCategory => {
          postCategory.save();
        });
      });
      // var post = this.store.createRecord('post', {
      //   title: this.title,
      //   body:  this.body
      // });
      // post.save().then(() => {
      //   this.setProperties({
      //     title: null,
      //     body: null
      //   });
      //   this.transitionToRoute('posts');
      // });
    }
  }
});
