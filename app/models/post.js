import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import DS from 'ember-data';

export default DS.Model.extend({
  comments: DS.hasMany('comment', { async: true }),
  categories: DS.hasMany('category', { async: true }),
  tags: DS.hasMany('tag', { async: true }),

  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  featureImage: DS.attr(),
  featureLink: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  htmlBody: computed('body', function() {
    var body = this.body;
    return htmlSafe(body);
  })
});
