import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  goodreadsReviews: computed(function() {
    return this.store.findAll('goodreadsReview');
  })
});
