var currentDayEl = document.getElementById('currentDay');

// handles date
function displayDay() {
    var today = moment().format('MMM DD, YYYY');
    currentDayEl.textContent = today;
  }
displayDay();


