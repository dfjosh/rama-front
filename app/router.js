import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // arg1 is the route name (what you will use to refer to the route in link-to's). arg2 is what you'll see in the address bar
  // only nest routes if you want one template to render inside another (thru the outlet)
  this.route('posts');
  this.route('posts.new', { path: 'posts/new' }); // I can't nest it because my template can't be nested because I don't want to render it inside the posts template! :(
  this.route('post', { path: 'posts/:post_id' });
  this.route('projects');
  this.route('about');
});

export default Router;
