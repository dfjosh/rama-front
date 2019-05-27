import { helper } from '@ember/component/helper';

export function prettyDuration(params/*, hash*/) {
  let secs = params[0];
  let hours = null;
  let minutes = null;
  let seconds = null;
  
  minutes = Math.floor(secs / 60);
  seconds = secs % 60;
  
  if (minutes >= 60) {
    hours = Math.floor(minutes / 60);
    minutes = Math.floor(secs / 60) - (hours * 60);
  }
  
  let fmtStrParts = [];
  // if (hours) { fmtStrParts.push(`${hours} ${hours > 1 ? 'hrs' : 'hr'}`)}
  // if (minutes) { fmtStrParts.push(`${minutes} ${minutes > 1 ? 'mins' : 'min'}`)}
  // if (seconds) { fmtStrParts.push(`${seconds} ${seconds > 1 ? 'secs' : 'sec'}`)}
  if (hours) { fmtStrParts.push(`${hours}h`)}
  if (minutes) { fmtStrParts.push(`${minutes}m`)}
  if (seconds) { fmtStrParts.push(`${seconds}s`)}
  return fmtStrParts.join(' ');
}

export default helper(prettyDuration);
