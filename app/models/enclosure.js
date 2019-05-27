import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

const M4A = "audio/x-m4a";
const MPEG = "audio/mpeg";
const QT = "video/quicktime";
const MP4 = "video/mp4";
const M4V = "video/x-m4v";
const PDF = "application/pdf";

const MIME_TYPES = [M4A, MPEG, QT, MP4, M4V, PDF]

let enclosure = Model.extend({
  episode: belongsTo('episode', {async: true}),
  
  url: attr(),
  size: attr('number'),
  mimeType: attr(),
  createdAt: attr('date'),
  updatedAt: attr('date')
});

enclosure.reopenClass({
  MIME_TYPES: MIME_TYPES
});

export default enclosure;