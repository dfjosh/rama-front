import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Post from 'rama-front/models/post';

export default Route.extend({
  session: service(),
  current: service(),

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
    postParams.filters = []
    postParams.filters.push({
      name: "categories.name",
      op: "!=",
      val: "Projects"
    });
    postParams.filters.push({
      name: "state",
      op: "=",
      val: Post.PUBLISHED
    });
    if (this.session.isAuthenticated && this.current.user.isAdmin) {
      postParams.filters.pop();
    }
    postParams.limit = params.limit,
    postParams.page = params.page,
    postParams.includes = [
      "tags",
      "categories"
    ]
    return this.store.query('post', postParams);
  }
});
