const { addDays } = require("date-fns");
function daysFunc(days) {
  const lastDay = addDays(new Date(2020, 7, 22), days);
  return `${lastDay.getDate()}-${
    lastDay.getMonth() + 1
  }-${lastDay.getFullYear()}`;
}
module.exports = daysFunc;
