import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  comments: DS.hasMany('comment', { async: true }),

  title: DS.attr(),
  author: DS.attr(),
  body: DS.attr(),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  htmlBody: Ember.computed('body', function() {
    var body = this.get('body');
    return Ember.String.htmlSafe(body);
  })
});
