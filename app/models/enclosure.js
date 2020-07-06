import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

const M4A = "audio/x-m4a";
const MPEG = "audio/mpeg";
const QT = "video/quicktime";
const MP4 = "video/mp4";
const M4V = "video/x-m4v";
const PDF = "application/pdf";

const MIME_TYPES = [M4A, MPEG, QT, MP4, M4V, PDF]

let enclosure = Model.extend({
  ajax: service(),
  
  episode: belongsTo('episode', {async: true}),
  
  url: attr(),
  size: attr('number'),
  mimeType: attr(),
  createdAt: attr('date'),
  updatedAt: attr('date'),
  
  computedMimeType: computed('url', function() {
    let ext = this.url.split(".").pop();
    switch (ext) {
      case "mp3":
        return MPEG
      case "m4a":
        return M4A
      case "aac":
        return M4A
      case "mov":
        return QT
      case "mp4":
        return MP4
      case "m4v":
        return M4V
      case "pdf":
        return PDF
      default: null
    }
  }),
  
  fetchSize: computed('url', function() {
    return this.ajax.raw(this.url, {
      method: 'HEAD'
    }).then(response => {
      return parseInt(response.jqXHR.getResponseHeader('content-length'));
    });
  })
});

enclosure.reopenClass({
  MIME_TYPES: MIME_TYPES
});

export default enclosure;