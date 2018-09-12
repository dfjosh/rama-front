import Ember from 'ember';

export default Ember.Component.extend({  
  page: null,

  prevPage: Ember.computed('page', function() {
    return this.get('page') - 1;
  }),

  nextPage: Ember.computed('page', function() {
    return this.get('page') + 1;
  }),

  isFirstPage: Ember.computed('page', function() {
    return this.get('page') === 1;
  }),

  isLastPage: Ember.computed('model', function() {
    return this.get('page') === this.get('model.meta.page-count');
  })
});
