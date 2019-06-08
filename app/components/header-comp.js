import Component from '@ember/component';
import ENV from '../config/environment';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({  
  classNames: ['header-comp'],
  classNameBindings: ['adminToolbarMargin', 'fullWidth'],
  tagName: 'header',
  ENV: ENV,
  
  session: service(),
  
  image: 'uploads/2014/01/dfjHeader_2160x622_grey_transparent.png',
  
  adminToolbarMargin: computed('session', function() {
    return this.session.isAuthenticated;
  })
});
