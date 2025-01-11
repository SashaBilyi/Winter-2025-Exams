// Refactor following solution
// Get day number

'use strict';

const _parse_day_ = (s) => {
  const D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (const [i, day] of D.entries()) {
    if (s.startsWith(day.toLowerCase())) {
      return i + 1;
    }
  }
  return -1;
};

module.exports = _parse_day_;
