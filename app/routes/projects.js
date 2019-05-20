import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let projectParams = {}
    projectParams.filters = [
      {
        scope: 'categories',
        args: ['Projects']
      }
    ]
    return this.store.query('post', projectParams);
  }
});
