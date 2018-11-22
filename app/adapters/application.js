import DS from 'ember-data';
import ENV from '../config/environment';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default DS.JSONAPIAdapter.extend({
  host: ENV.apiURL,
  init() {
    this._super(...arguments);
    this.set('headers', {
      'Content-Type': 'application/json'
    });
  },
  pathForType(type) {
    return pluralize(underscore(type));
  }
});
