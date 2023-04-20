// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
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

  // Current day display
  var currentDayEl = $('#currentDay');
  console.log(currentDayEl);
  
  var CurrentDay = dayjs().format('dddd MMMM, D');
  currentDayEl.text(CurrentDay);

  // Create past, present, and future classes via military time. But still display normally on the website.
  var currentHour = dayjs().hour();
  console.log(currentHour);

  var timeNine = $("#hour-9");
  timeNine.addClass('');

  if(9 < currentHour) {
    console.log("past");
    timeNine.addClass('past');
  }
  if(9 === currentHour) {
    console.log("present");
    timeNine.addClass('present');

  }
  if(9 > currentHour){
    console.log("future");
    timeNine.addClass('future');
  }

  var timeTen = $("#hour-10");
  timeTen.addClass('');

  if(10 < currentHour) {
    console.log("past");
    timeTen.addClass('past');
  }
  if(10 === currentHour) {
    console.log("present");
    timeTen.addClass('present');

  }
  if(10 > currentHour){
    console.log("future");
    timeTen.addClass('future');
  }

  var timeEleven = $("#hour-11");
  timeEleven.addClass('');

  if(11 < currentHour) {
    console.log("past");
    timeEleven.addClass('past');
  }
  if(11 === currentHour) {
    console.log("present");
    timeEleven.addClass('present');

  }
  if(11 > currentHour){
    console.log("future");
    timeEleven.addClass('future');
  }

  var timeTwelve = $("#hour-12");
  timeTwelve.addClass('');

  if(12 < currentHour) {
    console.log("past");
    timeTwelve.addClass('past');
  }
  if(12 === currentHour) {
    console.log("present");
    timeTwelve.addClass('present');

  }
  if(12 > currentHour){
    console.log("future");
    timeTwelve.addClass('future');
  }

  var timeThirteen = $("#hour-13");
  timeThirteen.addClass('');

  if(1 < currentHour) {
    console.log("past");
    timeThirteen.addClass('past');
  }
  if(1 === currentHour) {
    console.log("present");
    timeThirteen.addClass('present');

  }
  if(1 > currentHour){
    console.log("future");
    timeThirteen.addClass('future');
  }

  var timeFourteen = $("#hour-14");
  timeFourteen.addClass('');

  if(2 < currentHour) {
    console.log("past");
    timeFourteen.addClass('past');
  }
  if(2 === currentHour) {
    console.log("present");
    timeFourteen.addClass('present');

  }
  if(2 > currentHour){
    console.log("future");
    timeFourteen.addClass('future');
  }

  var timeFifteen = $("#hour-15");
  timeFifteen.addClass('');

  if(3 < currentHour) {
    console.log("past");
    timeFifteen.addClass('past');
  }
  if(3 === currentHour) {
    console.log("present");
    timeFifteen.addClass('present');

  }
  if(3 > currentHour){
    console.log("future");
    timeFifteen.addClass('future');
  }

  var timeSixteen = $("#hour-16");
  timeSixteen.addClass('');

  if(4 < currentHour) {
    console.log("past");
    timeSixteen.addClass('past');
  }
  if(4 === currentHour) {
    console.log("present");
    timeSixteen.addClass('present');

  }
  if(4 > currentHour){
    console.log("future");
    timeSixteen.addClass('future');
  }

  var timeSeventeen = $("#hour-17");
  timeSeventeen.addClass('');

  if(5 < currentHour) {
    console.log("past");
    timeSeventeen.addClass('past');
  }
  if(5 === currentHour) {
    console.log("present");
    timeSeventeen.addClass('present');

  }
  if(5 > currentHour){
    console.log("future");
    timeSeventeen.addClass('future');
  }

  var timeEightteen = $("#hour-18");
  timeEightteen.addClass('');

  if(6 < currentHour) {
    console.log("past");
    timeEightteen.addClass('past');
  }
  if(6 === currentHour) {
    console.log("present");
    timeEightteen.addClass('present');

  }
  if(6 > currentHour){
    console.log("future");
    timeEightteen.addClass('future');
  }
});

// local storage saved 


