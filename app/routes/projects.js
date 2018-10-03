import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

  model() {     // params
    return this.store.query('category', {
      filter: {
        name: 'Projects'
      }
    }).then(categories => {
      let categoryIds = categories.map(c => { return c.id; });
      return this.store.query('post', {
        filter: {
          categories: categoryIds
        }
      });
    });
  }
});
