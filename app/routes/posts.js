import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    }
  },
  
  model(params) {
    let postParams = {}
    postParams.filters = [
      {
        scope: 'not_categories',
        args: ['Projects']
      }
    ]
    postParams.limit = params.limit,
    postParams.page = params.page,
    postParams.includes = [
      "post_tags",
      "post_categories"
    ]
    return this.store.query('post', postParams);
  }
});
