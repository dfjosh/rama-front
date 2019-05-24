import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  podcast: belongsTo('episode'),
  post: belongsTo('post'),
  user: belongsTo('user'),
  
  
  title: attr(),
  guid: attr(),
  summary: attr(),
  number: attr(),
  episodeType: attr(),
  pubDate: attr(),
  duration: attr(),
  explicit: attr(),
  image: attr(),
  state: attr(),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  postId: attr()
});
