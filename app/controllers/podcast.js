import Controller from '@ember/controller';
import ENV from '../config/environment';
import { computed } from '@ember/object';

export default Controller.extend({
  ENV: ENV,
  
  // posts: computed('model.episodes', function() {
  //   return this.model.episodes.getEach('post');
  // })
  
  episodePosts: computed('model.episodes', function() {
    console.log(this.model.episodes.mapBy('postId'))
    return this.store.query('post', {
      booger: this.model.episodes.mapBy('postId')
    });
    // return this.model.episodes.then(episodes => {
    //   episodes.forEach(episode => {
    //     console.log(episode.title);
    //     // return episode.post.then(post => {
    //     //   console.log(post.slug);
    //     // });
    //     return this.store.query()
    //   });
    // });
  })
});
