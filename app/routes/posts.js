import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    },
    limit: {
      refreshModel: true
    },
    categories: {
      refreshModel: true
    }
  },
  
  model(params) {
    let postParams = {}
    postParams.limit = params.limit;
    postParams.page = params.page;
    Object.keys(params).forEach(key => {
      if (!["limit", "page"].includes(key) && params[key] != null) {
        postParams.filters = [
          {
            scope: key,
            args: [params[key]]
          }
        ];
      }
    });
    // postParams.includes = [ // just decided to side load everything always after switching to AMS
    //   "post_tags",
    //   "post_categories"
    // ]
    return this.store.query('post', postParams);
  }
});
