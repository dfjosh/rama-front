import Controller from '@ember/controller';
import ENV from '../config/environment';
import { computed } from '@ember/object';

export default Controller.extend({
  ENV: ENV,
  
  orderedEpisodes: computed('model.episodes', function() {
    return this.model.episodes.sortBy('post.publishedAt').reverse();
    // debugger;
    // return this.model.episodes.sort(function(a, b) {
    //   return a.post.publishedAt - b.post.publishedAt;
    // });
  })
});
