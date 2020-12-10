var currentHour = moment().hours();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a")); 

//Save user input in local storage // 
    $(".saveBtn").on("click", function() {
        var userInput = $(this).siblings(".user-input").val();
        var timeStamp = $(this).siblings(".user-input").attr("id");
        localStorage.setItem(timeStamp, userInput);

    })

//highlight hour rows based on the time of day// 
$(".user-input").each(function() {
    var hourBlock = parseInt($(this).attr("id"));
    if (hourBlock < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
    } else if (hourBlock === currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
