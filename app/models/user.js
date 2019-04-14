import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';
import { computed } from '@ember/object';

export default Model.extend({
  posts: hasMany('post', {async: true}),
  
  firstName: attr(),
  lastName: attr(),
  isAdmin: attr(),
  email: attr(),
  
  fullName: computed('firstName', 'lastName', function() {
    return `${this.firstName} ${this.lastName}`.trim();
  })
});
