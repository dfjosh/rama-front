import Component from '@ember/component';
import ENV from '../config/environment';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: "a",
  classNames: ["apple-podcasts-link"],
  attributeBindings: ["href"],
  
  ENV: ENV,
  small: false,
  
  href: computed('podcast', function() {
    return this.get('podcast.applePodcastsLink'); // it bothers me but I guess I still need to use .get() here (based on the error message I got)
  })
});
