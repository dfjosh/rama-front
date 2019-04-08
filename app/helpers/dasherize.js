import { helper } from '@ember/component/helper';
import { dasherize as dash } from '@ember/string';

export function dasherize(params/*, hash*/) {
  let string = params[0];
  return dash(string);
}

export default helper(dasherize);
