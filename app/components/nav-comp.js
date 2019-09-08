import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  classNames: ['nav-comp'],
  classNameBindings: ['lighter'],
  tagName: 'nav',
  
  router: service(),
  
  postLike: computed(function() {
    return ['posts', 'post'].includes(this.router.currentRouteName) && !window.location.href.includes("categories=Stories");
  }),
  podcastLike: computed(function() {
    return ['podcasts', 'podcast'].includes(this.router.currentRouteName);
  }),
  storyLike: computed(function() {
    return window.location.href.includes("categories=Stories"); // not working when you switch from Feed to Stories cause a guess the route doesn't reload or something
  })
});
