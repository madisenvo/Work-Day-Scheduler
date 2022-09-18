var currentDayEl = document.getElementById('currentDay');

// handles date
var today = moment().format('dddd, MMMM Do, YYYY');
currentDayEl.textContent = today;



