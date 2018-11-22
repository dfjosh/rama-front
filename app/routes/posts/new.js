import Route from '@ember/routing/route';
// import EmberObject from '@ember/object';

export default Route.extend({
  model() {
    return this.store.createRecord('post');
  }
  
  // model() {
  //   return this.store.findAll('category').then(categories => { // don't do this. maybe this should be computed on the controller and the model should be an EmberObject.create?
  //     return this.store.findAll('tag').then(tags => {
  //       return EmberObject.create({
  //         categories: categories,
  //         tags: tags
  //       });
  //     });
  //   });
  // }
});
