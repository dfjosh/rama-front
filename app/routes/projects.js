import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Post from 'rama-front/models/post';

export default Route.extend({
  session: service(),
  current: service(),

  // queryParams: {
  //   page: {
  //     refreshModel: true
  //   }
  // },
  
  model() {
    let projectParams = {}
    projectParams.filters = []
    projectParams.filters.push({
      name: "categories.name",
      op: "=",
      val: "Projects"
    });
    projectParams.filters.push({
      name: "state",
      op: "=",
      val: Post.PUBLISHED
    });
    if (this.session.isAuthenticated && this.current.user.isAdmin) {
      projectParams.filters.pop();
    }
    return this.store.query('post', projectParams);
  }

  // model() {     // params
  //   return this.store.query('category', {
  //     filter: {
  //       name: 'Projects'
  //     }
  //   }).then(categories => {
  //     let categoryIds = categories.map(c => { return c.id; });
  //     return this.store.query('post', {
  //       filter: {
  //         categories: categoryIds
  //       }
  //     });
  //   });
  // }
});
