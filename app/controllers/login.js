import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    login() {
      let session = this.store.createRecord('session', {
        email: this.email,
        password: this.password
      });
      session.save().then(resp => {
        console.log(resp);
        this.transitionToRoute('posts');
      });
    }
  }
});
