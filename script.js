// sets date
var currentDayEl = document.getElementById('currentDay');
var today = moment().format('dddd, MMMM Do');
currentDayEl.textContent = today;

$(document).ready(function () {
    // saveBtn click listener saves to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, text);
    })

    // tracks current time and sets color
    function setTimeColor() {
        var currentTime = moment().hour();

        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id"));

            if (timeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (timeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
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

    setTimeColor();
})
