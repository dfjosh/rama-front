import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { alias } from '@ember/object/computed';

const FULL = "full";
const TRAILER = "trailer";
const BONUS = "bonus";

const EPISODE_TYPES = [FULL, TRAILER, BONUS];

let episode = Model.extend({
  podcast: belongsTo('podcast'),
  post: belongsTo('post'),
  user: belongsTo('user'),
  author: alias('user'),
  
  title: attr(),
  guid: attr(),
  summary: attr(),
  number: attr(),
  episodeType: attr(),
  duration: attr(),
  explicit: attr(),
  image: attr(),
  createdAt: attr('date'),
  updatedAt: attr('date'),
});

episode.reopenClass({
  EPISODE_TYPES: EPISODE_TYPES
});

export default episode;