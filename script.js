var currentHour = moment().hours();
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY, h:mm a")); 

//Save user input in local storage // 
    $(".saveBtn").on("click", function() {
        var userInput = $(this).siblings(".user-input").val();
        var timeStamp = $(this).siblings(".user-input").attr("id");
        localStorage.setItem(timeStamp, userInput);

    })
