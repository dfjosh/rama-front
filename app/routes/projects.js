import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model(params) {
    return this.get('store').query('category', {
      filter: {
        name: 'Projects'
      }
    }).then(categories => {
      let categoryIds = categories.map(c => { return c.id });
      return this.get('store').query('post', {
        filter: {
          categories: categoryIds
        }
      });
    });
  }
});
