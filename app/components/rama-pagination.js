import { computed } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({  
  page: null,

  prevPage: computed('page', function() {
    return this.page - 1;
  }),

  nextPage: computed('page', function() {
    return this.page + 1;
  }),

  isFirstPage: computed('page', function() {
    return this.page === 1;
  }),

  isLastPage: computed('model', function() {
    return this.page === this.get('model.meta.page-count');
  })
});
