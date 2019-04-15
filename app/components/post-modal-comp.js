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
  
  headerText: null,
  slug: null,
  slugOverride: false,
  slugLock: false,
  
  init(refreshModel) {
    this._super(...arguments);

    if (this.model === undefined || refreshModel === true) {
      this.set('model', this.store.createRecord('post'));
    }
    console.log(this.model.slug);
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
    console.log('slugObserver');
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
    toggleSlugLock() {
      this.toggleProperty('slugLock');
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
        author: this.current.user
      })
      if (this.model.isNew) {
        this.model.set('slug', this.slug); // set it to the "intermediate slug value" if its new, otherwise the model's slug is updated directly
      }
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
