import Service from '@ember/service';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import { isEmpty } from '@ember/utils';

export default Service.extend({
  session: service(),
  store: service(),
  
  load() {
    let userId = (this.session.data.authenticated.tokenData || {}).sub;
    if (!isEmpty(userId)) {
      return this.store.findRecord('user', userId).then(user => {
        this.set('user', user);
      });
    } else {
      return RSVP.resolve();
    }
  }
});
