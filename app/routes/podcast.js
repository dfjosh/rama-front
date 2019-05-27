import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('podcast', {slug: params.slug}).then(podcasts => {
      return podcasts.firstObject;
    });
  }
});
