import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  session: service(),
  
  actions: {
    // login() {
    //   let session = this.store.createRecord('session', {
    //     email: this.email,
    //     password: this.password
    //   });
    //   session.save().then(resp => {
    //     console.log(resp);
    //     this.transitionToRoute('posts');
    //   });
    // },
    authenticate() {
      this.get('session').authenticate('authenticator:oauth2', this.email, this.password)
    }
  }
});
