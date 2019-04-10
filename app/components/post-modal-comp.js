import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import RSVP from 'rsvp';
import $ from 'jquery';
import Post from 'rama-front/models/post';

export default Component.extend({
  classNames: ['post-modal-comp'],
  store: service(),
  router: service(),
  
  Post: Post,
    
  init(refreshModel) {
    this._super(...arguments);
    // if (!this.model.isNew) {
    //   console.log(this.model.title);
    //   return this.model.get('postTags').then(postTags => {
    //     console.log(postTags.length);
    //     return postTags;
    //   });
    // }
    
    // if (refreshModel === true) {
    //   this.set('model', this.store.createRecord('post'));
    // } else if (this.model === undefined) {
    //   this.model = this.store.createRecord('post');
    // }
    
    if (this.model === undefined || refreshModel === true) {
      this.set('model', this.store.createRecord('post'));
    }
  },
  
  categories: computed(function() {
    return this.store.findAll('category');
  }),
  
  tags: computed(function() {
    return this.store.findAll('tag');
  }),
  
  clear() {
    this.model.eachAttribute(attr => {
      this.model.set(attr, undefined);
    });
  },
  
  actions: {
    addCategory(category) {
      let postCategory = this.store.createRecord('post-category', {
        category: category,
        post: this.model
      });
      this.model.postCategories.pushObject(postCategory);
    },
    addTag(tag) {
      let postTag = this.store.createRecord('post-tag', {
        tag: tag,
        post: this.model
      });
      this.model.postTags.pushObject(postTag);
    },
    savePost(state) {
      this.model.set('state', state);
      this.model.save().then(post => {
        return RSVP.all([
          post.postCategories.map(postCategory => postCategory.save()),
          post.postTags.map(postTag => postTag.save())
        ]);
      }).then(() => {
        $(`#${this.modalId}`).modal('hide');
        // this.model.reload();
        // this.rerender();
        this.init(true);
        // window.location.reload(true);
        this.router.transitionTo('posts', {queryParams: {page: 1}}); // queryParams so that the model reloads
      });
    },
    cancelPost() {
      this.clear();
    },
    deletePost() {
      this.model.destroyRecord();
    }
  }
});
