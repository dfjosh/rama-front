import Component from '@ember/component';
import ENV from '../config/environment';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: "a",
  classNames: ["rss-feed-link"],
  classNameBindings: ['small::btn', 'small::btn-sm', 'small::btn-default'],
  attributeBindings: ["href", "type"],
  
  ENV: ENV,
  small: false,
  type: computed('small', function() {
    return this.small ? '' : 'button';
  }),
  
  href: computed('podcast', function() {
    return this.get('podcast.rssFeedLink');
  })
});
