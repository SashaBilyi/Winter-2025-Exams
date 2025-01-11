// Refactor following solution
// Get day number

'use strict';

const _parse_day_ = (s) => {
  const D = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const index = D.findIndex((day) => s.startsWith(day.toLowerCase()));
  return index !== -1 ? index + 1 : -1;
};

module.exports = _parse_day_;
