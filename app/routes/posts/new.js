import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    publishPost: function() {
      var post = this.store.createRecord('post', {
        title: this.controller.get('title'),
        body:  this.controller.get('body')
      });
      post.save().then(post => {
        this.controller.setProperties({
          title: null,
          body: null
        });
        return this.controller.get('post').reload().then(model => {
          this.transitionTo('posts');
        });
      });
    }
  }
});
