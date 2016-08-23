import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page'],
  
  page: 1,

  prevPage: Ember.computed('page', function() {
    return this.get('page') - 1;
  }),

  nextPage: Ember.computed('page', function() {
    return this.get('page') + 1;
  }),

  lastPage: Ember.computed(function() {
    return this.store.query('post', {}).then(result => {
      var params = result.get('links.last').split("?")[1].split("&");
      var page = params.filter(param => {
        return param.startsWith('page%5Bnumber%5D=');
      })[0];
      return parseInt(page.split("=")[1]);
    });
  }),

  isFirstPage: Ember.computed('page', function() {
    return this.get('page') === 1;
  }),

  isLastPage: Ember.computed('page', 'lastPage', function() {
    var promise = this.get('lastPage').then(lastPage => {
      return this.get('page') === lastPage;
    });
    return DS.PromiseObject.create({
      promise: promise
    });
  })
});
