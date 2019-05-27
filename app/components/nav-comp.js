import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['nav-comp'],
  classNameBindings: ['lighter'],
  tagName: 'nav',
  
  router: service(),
  
  postLike: computed(function() {
    return ['posts', 'post'].includes(this.router.currentRouteName);
  }),
  podcastLike: computed(function() {
    return ['podcasts', 'podcast'].includes(this.router.currentRouteName);
  })
});
