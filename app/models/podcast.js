import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';
import ENV from '../config/environment';

export default Model.extend({
  episodes: hasMany('episode'),
  
  title: attr(),
  description: attr(),
  website: attr(),
  podcastType: attr(),
  feed: attr(),
  image: attr(),
  category: attr(),
  subcategory: attr(),
  explicit: attr(),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  slug: attr(),
  state: attr(),
  headerImage: attr(),
  externalId: attr(),
  
  applePodcastsLink: computed('slug', 'externalId', function() {
    return `https://podcasts.apple.com/us/podcast/${this.slug}/id${this.externalId}`;
  }),
  
  rssFeedLink: computed('slug', 'feed', function() {
    return `${ENV.cdnURL}/${this.slug}/${this.feed}`;
  })
});
