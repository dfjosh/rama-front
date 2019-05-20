import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { belongsTo } from 'ember-data/relationships';
import { htmlSafe } from '@ember/template';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import ENV from '../config/environment';

const DRAFT = "DRAFT";
const PUBLISHED = "PUBLISHED";
const ARCHIVED = "ARCHIVED";

let post = Model.extend({
  user: belongsTo('user', {async: true}),
  comments: hasMany('comment', {async: true}),
  categories: hasMany('category', {async: true}),
  postCategories: hasMany('post-category', {async: true}),
  tags: hasMany('tag', {async: true}),
  postTags: hasMany('post-tag', {async: true}),

  title: attr(),
  slug: attr(),
  author: alias('user'),
  body: attr(),
  state: attr(),
  featureImage: attr(),
  featureLink: attr(),
  createdAt: attr('date'),
  updatedAt: attr('date'),

  htmlBody: computed('body', function() {
    let placeholder = /&cdnURL&/g;
    let body = this.body.replace(placeholder, ENV.cdnURL);
    return htmlSafe(body);
  }),
  
  isDraft: computed('state', function() {
    return this.state === DRAFT;
  }),
  
  isPublished: computed('state', function() {
    return this.state === PUBLISHED;
  }),
  
  isArchived: computed('state', function() {
    return this.state === ARCHIVED;
  })
});

post.reopenClass({
  DRAFT: DRAFT,
  PUBLISHED: PUBLISHED,
  ARCHIVED: ARCHIVED
})

export default post;