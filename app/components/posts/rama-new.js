import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["rama-new"],

  title: null,
  body: null,

  actions: {
    publishPost: function() {
      var post = this.store.createRecord('post', {
        title: this.get('title'),
        body:  this.get('body')
      });
      post.save().then(post => {
        this.setProperties({
          title: null,
          body: null
        });
        // this.controller.transitionToRoute('posts');
        // return this.controller.get('post').reload().then(model => {
        //   this.transitionTo('posts');
        // });
      });
    }
  }
});
