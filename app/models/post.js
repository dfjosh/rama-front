import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
// import DS from 'ember-data';

export default Model.extend({
  comments: hasMany('comment', { async: true }),
  categories: hasMany('category', { async: true }),
  postCategories: hasMany('post-category', {async: true}),
  tags: hasMany('tag', { async: true }),

  title: attr(),
  author: attr(),
  body: attr(),
  featureImage: attr(),
  featureLink: attr(),
  createdAt: attr('date'),
  updatedAt: attr('date'),

  htmlBody: computed('body', function() {
    var body = this.body;
    return htmlSafe(body);
  })
});
