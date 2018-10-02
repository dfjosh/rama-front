import Component from '@ember/component';

export default Component.extend({
  classNames: ["rama-new"],

  title: null,
  body: null,

  actions: {
    publishPost: function() {
      var post = this.store.createRecord('post', {
        title: this.title,
        body:  this.body
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
