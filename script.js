var currentDayEl = document.getElementById('currentDay');

// handles date
var today = moment().format('dddd, MMM Do, YYYY');
currentDayEl.textContent = today;



