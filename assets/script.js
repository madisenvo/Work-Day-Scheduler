var timeDisplayed = $(".time-block");
var currentDayEl = $('#currentDay');
var saveBtn = $(".saveBtn");
var today = moment().format('dddd, MMMM Do');

// sets date in jumbotron
currentDayEl.textContent = today;

// functions run upon page load
$(document).ready(function () {

// saveBtn click listener saves to local storage
    saveBtn.on("click", function () {
        var event = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, event);
    })

// tracks current time and sets color accordingly
    function setTimeColor() {
        var currentTime = moment().hour();

        timeDisplayed.each(function () {
            var timeBlock = parseInt($(this).attr("id"));

            if (timeBlock < currentTime) {
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).addClass("present");
            }
            else {
                $(this).addClass("future");
            }
        })
    }

// gets inputs from local storage
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

// calls function to set colors
    setTimeColor();
})
