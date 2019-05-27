// import DS from 'ember-data';
// import { underscore } from '@ember/string';
import { ActiveModelSerializer } from 'active-model-adapter';

export default ActiveModelSerializer.extend({
  // NOTE no need for this anymore since I decided to dasherize keys in the serializers on the
  // backend since that is the jsonapi spec
  // keyForAttribute(attr) {
  //   return underscore(attr);
  // },
  // keyForRelationship(key/*, relationship*/) {
  //   return underscore(key)
  // }
});
