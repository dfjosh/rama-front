import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('post');

    // Add .query() if you want to add params to your request

    // return this.store.query('post', {
    //   sort: '-created_at'
    // });

    // return this.store.query('post', {
    //   filter: {
    //     author: 'wetjosh'
    //   }
    // });

    // return this.get('store').query('post', {
    //   page: {
    //     number: 2,
    //     size: 3
    //   }
    // });
  }
});
