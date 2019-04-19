import ApplicationAdapter from './application';
import { underscore } from '@ember/string';
import { pluralize } from 'ember-inflector';

export default ApplicationAdapter.extend({
  urlForFindRecord(id, modelName, snapshot) {
    return `${this.host}/${pluralize(underscore(modelName))}/${snapshot.attr('slug')}`;
  },
  // urlForUpdateRecord(id, modelName, snapshot) {
  //   return `${this.host}/${pluralize(underscore(modelName))}/${snapshot.attr('slug')}`;
  // },
  // urlForDeleteRecord(id, modelName, snapshot) {
  //   return `${this.host}/${pluralize(underscore(modelName))}/${snapshot.attr('slug')}`;
  // }
});
