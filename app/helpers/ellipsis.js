import { helper } from '@ember/component/helper';
import { htmlSafe, isHTMLSafe } from '@ember/template';

export function ellipsis(params/*, hash*/) {
  let str = isHTMLSafe(params[0]) ? params[0].string : params[0];
  let limit = params[1];
  
  if (limit == null || limit >= str.length) {
    return htmlSafe(str);
  } else {
    let slice = str.slice(0, limit);
    return htmlSafe(slice.replace(/\s\S*$/, "&hellip;"));
  }
}

export default helper(ellipsis);
