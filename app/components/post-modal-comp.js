import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, observer } from '@ember/object';
import { dasherize } from '@ember/string';
import RSVP from 'rsvp';
import $ from 'jquery';
import Post from 'rama-front/models/post';

export default Component.extend({
  classNames: ['post-modal-comp'],
  store: service(),
  router: service(),
  current: service(),
  
  Post: Post,
  header: "Post",
  slug: null,
  slugOverride: false,
  
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
      this.set('header', 'New Post');
    }
    
    if (!this.model.isNew) {
      this.set('slug', this.model.slug);
    }
  },
  
  categories: computed(function() {
    return this.store.findAll('category');
  }),
  
  tags: computed(function() {
    return this.store.findAll('tag');
  }),
  
  slugifiedTitle: computed('model.title', function() {
    let slug = undefined;
    if (this.model.title !== undefined) {
      slug = dasherize(this.model.title);
      slug = slug.replace(/^-|-$/g, '');          // strip hyphens at beginning and end
      slug = slug.replace(/[^-a-zA-Z0-9]+/g, ''); // remove anything not letters or numbers or hyphens
    }
    return slug;
  }),

  slugObserver: observer('model.title', 'slugOverride', function() {
    if (!this.slugOverride) {
      this.set('slug', this.slugifiedTitle);
    }
  }),
  
  clear() {
    this.model.eachAttribute(attr => {
      this.model.set(attr, undefined);
    });
    this.set('slug', null);
  },
  
  actions: {
    onSlugOverride() {
      this.set('slugOverride', true);
    },
    resetSlugOverride() {
      this.set('slugOverride', false);
    },
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
      this.model.setProperties({
        state: state,
        slug: this.slug,
        author: this.current.user
      })
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
      }).catch(e => {
        alert(e);
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
