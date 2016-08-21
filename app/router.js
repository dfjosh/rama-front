import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // arg1 is the route name (what you wiil use to refer to the route in link-to's). arg2 is what you'll see in the address bar
  // only nest routes if you want one template to render inside another (thru the outlet)
  this.route('posts', function() {
    this.route('new');
  });
  this.route('post', { path: 'posts/:post_id' });
});

export default Router;
