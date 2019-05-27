// import DS from 'ember-data';
import ActiveModelAdapter from 'active-model-adapter';
import ENV from '../config/environment';
// import { underscore } from '@ember/string';
// import { pluralize } from 'ember-inflector';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';

export default ActiveModelAdapter.extend(TokenAuthorizerMixin, {
  host: ENV.apiURL,
  // init() {
  //   this._super(...arguments);
  //   this.set('headers', {
  //     'Content-Type': 'application/json' // don't need this anymore since I registered 'application/vnd.api+json' (JSONAPIAdapter's default mime type) in Rails
  //   });
  // },
  // pathForType(type) {
  //   return pluralize(underscore(type));
  // }
});
