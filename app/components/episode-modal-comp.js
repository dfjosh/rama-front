import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import $ from 'jquery';
import Post from 'rama-front/models/post';
import Episode from 'rama-front/models/episode';
import Enclosure from 'rama-front/models/enclosure';

export default Component.extend({
  classNames: ['post-modal-comp'],
  store: service(),
  router: service(),
  current: service(),
  
  Post: Post,
  Episode: Episode,
  Enclosure: Enclosure,
  
  headerText: null,
  
  init(refreshModel) {
    this._super(...arguments);

    if (this.model === undefined || refreshModel === true) {
      this.set('model', this.store.createRecord('episode'));
      this.set('enclosure', this.store.createRecord('enclosure'));
    }
  },
  
  podcasts: computed(function() {
    return this.store.findAll('podcast');
  }),
  
  recentPosts: computed(function() {
    return this.store.query('post', {limit: 20});
  }),
  
  clear() {
    this.model.eachAttribute(attr => {
      this.model.set(attr, undefined);
    });
  },
  
  actions: {
    selectPodcast(podcast) {
      this.model.set('podcast', podcast);
    },
    selectPost(post) {
      this.model.set('post', post);
    },
    selectEpisodeType(episodeType) {
      this.model.set('episodeType', episodeType);
    },
    selectMimeType(mimeType) {
      this.enclosure.set('mimeType', mimeType);
    },
    saveEpisode() {
      this.model.setProperties({
        author: this.current.user
      })
      this.model.save().then(episode => {
        this.enclosure.set('episode', episode);
        return this.enclosure.save();
      }).then(() => {
        $(`#${this.modalId}`).modal('hide');
        this.init(true);
        this.router.transitionTo('posts', {queryParams: {page: 1}}); // queryParams so that the model reloads
      }).catch(e => {
        alert(e);
      });
    },
    cancelEpisode() {
      this.clear();
    },
    deleteEpisode() {
      this.model.destroyRecord();
    }
  }
});
