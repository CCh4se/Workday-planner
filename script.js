$(function () {
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

  if(13 < currentHour) {
    console.log("past");
    timeThirteen.addClass('past');
  }
  if(13 === currentHour) {
    console.log("present");
    timeThirteen.addClass('present');

  }
  if(13 > currentHour){
    console.log("future");
    timeThirteen.addClass('future');
  }

  var timeFourteen = $("#hour-14");
  timeFourteen.addClass('');

  if(14 < currentHour) {
    console.log("past");
    timeFourteen.addClass('past');
  }
  if(14 === currentHour) {
    console.log("present");
    timeFourteen.addClass('present');

  }
  if(14 > currentHour){
    console.log("future");
    timeFourteen.addClass('future');
  }

  var timeFifteen = $("#hour-15");
  timeFifteen.addClass('');

  if(15 < currentHour) {
    console.log("past");
    timeFifteen.addClass('past');
  }
  if(15 === currentHour) {
    console.log("present");
    timeFifteen.addClass('present');

  }
  if(15 > currentHour){
    console.log("future");
    timeFifteen.addClass('future');
  }

  var timeSixteen = $("#hour-16");
  timeSixteen.addClass('');

  if(16 < currentHour) {
    console.log("past");
    timeSixteen.addClass('past');
  }
  if(16 === currentHour) {
    console.log("present");
    timeSixteen.addClass('present');

  }
  if(16 > currentHour){
    console.log("future");
    timeSixteen.addClass('future');
  }

  var timeSeventeen = $("#hour-17");
  timeSeventeen.addClass('');

  if(17 < currentHour) {
    console.log("past");
    timeSeventeen.addClass('past');
  }
  if(17 === currentHour) {
    console.log("present");
    timeSeventeen.addClass('present');

  }
  if(17 > currentHour){
    console.log("future");
    timeSeventeen.addClass('future');
  }
});

// localStorage for schedules, was unable to determine what was the issue for this jquery statement. Attempted to debug the last portion of the code, attempted to add and take away code and still didn't find any true change to the outcome. 

function scheduleSaved(){

  $("#save").each('click', function(){
    const key = ('id');
    const value = ("#text").val();
    localStorage.setItem(key, value);
  });
}

  $("#hour").each(function(){
    const key = ('id');
    const value = localStorage.getItem(key);
    ("#text").val(value);
  });

  scheduleSaved();