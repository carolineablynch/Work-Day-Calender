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
    
//pull agenda items from local storage so they don't disappear on refresh// 
$("#8").val(localStorage.getItem("8"));
$("#9").val(localStorage.getItem("9"));
$("#10").val(localStorage.getItem("10"));
$("#11").val(localStorage.getItem("11"));
$("#12").val(localStorage.getItem("12"));
$("#13").val(localStorage.getItem("13"));
$("#14").val(localStorage.getItem("14"));
$("#15").val(localStorage.getItem("15"));
$("#16").val(localStorage.getItem("16"));
$("#17").val(localStorage.getItem("17"));

})
