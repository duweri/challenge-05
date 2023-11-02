//var past = $("past");
//var present = $("present");
//var future = $("future");


//THEN the current day is displayed at the top of the calendar
var today = dayjs().format("dddd, MMMM D");
$("#currentDay").text(today);

var currentHour = dayjs().hour();

//THEN I am presented with time blocks for standard business hours of 9am to 5pm


//THEN each time block is color-coded to indicate whether it is in the past, present, or future

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  function hourlyColor() {
    $(".time-block").each (function(){
      var rowHour = $(this).attr("id").split("-")[1]
    
      if (rowHour < currentHour) {
        $(this).removeClass("present");
        $(this).removeClass("future");
        $(this).addClass("past");
      }

      else if (rowHour == currentHour){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } 
      else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    })
  }
  hourlyColor();

  $(".saveBtn").on("click", function(){
    console.log(this)
    var hourKey = $(this).parent().attr("id")
    var activity = $(this).siblings(".description").val()
    localStorage.setItem(hourKey,activity)
  })
 for (var i = 9; i < 18; i++){
  $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
 }
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
