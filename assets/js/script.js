// define variables

var saveButton = $('.saveBtn');
var confirmationMsg = $('#confirmationMessage');

// current date & time
var today = moment().format("dddd Do MMMM YYYY");
var currentHour = moment().format("HH");

// print today's date at top of page: 
$("#currentDay").text(today);

// Calendar times for checkTime()
var nineAMBlock = $("#calendarHour-9");
var nineAM = moment().format("09");

var tenAMBlock = $("#calendarHour-10");
var tenAM = moment().format("10");

var elevenAMBlock = $("#calendarHour-11");
var elevenAM = moment().format("11");

var twelvePMBlock = $("#calendarHour-12");
var twelvePM = moment().format("12");

var onePMBlock = $("#calendarHour-1");
var onePM = moment().format("13");

var twoPMBlock = $("#calendarHour-2");
var twoPM = moment().format("14");

var threePMBlock = $("#calendarHour-3");
var threePM = moment().format("15");

var fourPMBlock = $("#calendarHour-4");
var fourPM = moment().format("16");

var fivePMBlock = $("#calendarHour-5");
var fivePM = moment().format("17");


// call functions
checkTime();
retrieveEvents();


// calendar color coding
function checkTime() {

    // add all times to an array
    var calendarHours = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

    // add all time block elements into an array
    var hourBlock = [nineAMBlock, tenAMBlock, elevenAMBlock, twelvePMBlock, onePMBlock, twoPMBlock, threePMBlock, fourPMBlock, fivePMBlock];

    // compare the above two arrays and assign color depending on time of day in relation to current time
    for (var i = 0; i < calendarHours.length; i++)

        if (calendarHours[i] > currentHour) {
            hourBlock[i].addClass('future');

        } else if (calendarHours[i] < currentHour) {
            hourBlock[i].addClass('past');

        } else {
            hourBlock[i].addClass('present');
        }
}


// retrieve stored calender events
function retrieveEvents() {

    // retrieve any stored info from local storage for '9AM'
    var hour9 = JSON.parse(localStorage.getItem('hour9'));

    // add that info to the 9AM element
    nineAMBlock.text(hour9);

    // repeat for all times
    var hour10 = JSON.parse(localStorage.getItem('hour10'));
    tenAMBlock.text(hour10);

    var hour11 = JSON.parse(localStorage.getItem('hour11'));
    elevenAMBlock.text(hour11);

    var hour12 = JSON.parse(localStorage.getItem('hour12'));
    twelvePMBlock.text(hour12);

    var hour1 = JSON.parse(localStorage.getItem('hour1'));
    onePMBlock.text(hour1);

    var hour2 = JSON.parse(localStorage.getItem('hour2'));
    twoPMBlock.text(hour2);

    var hour3 = JSON.parse(localStorage.getItem('hour3'));
    threePMBlock.text(hour3);

    var hour4 = JSON.parse(localStorage.getItem('hour4'));
    fourPMBlock.text(hour4);

    var hour5 = JSON.parse(localStorage.getItem('hour5'));
    fivePMBlock.text(hour5);

};


// save button even listener - saves input to local storage on click
// I originally put this in one event listener which gathers the info from all hour text fields, but decided to split it out to avoid any accidental saving of other times of the day

saveButton[0].addEventListener("click", function (event) {

    // pull input from 9AM row
    var hour9 = $("#calendarHour-9").val().trim();
    
    // store input into 9AM variable
    localStorage.setItem("hour9", JSON.stringify(hour9));

});

// repeat on all hours:

saveButton[1].addEventListener("click", function (event) {

    var hour10 = $("#calendarHour-10").val().trim();
    localStorage.setItem("hour10", JSON.stringify(hour10));

});

saveButton[2].addEventListener("click", function (event) {

    var hour11 = $("#calendarHour-11").val().trim();
    localStorage.setItem("hour11", JSON.stringify(hour11));

});

saveButton[3].addEventListener("click", function (event) {

    var hour12 = $("#calendarHour-12").val().trim();
    localStorage.setItem("hour12", JSON.stringify(hour12));

});

saveButton[4].addEventListener("click", function (event) {

    var hour1 = $("#calendarHour-1").val().trim();
    localStorage.setItem("hour1", JSON.stringify(hour1));

});

saveButton[5].addEventListener("click", function (event) {

    var hour2 = $("#calendarHour-2").val().trim();
    localStorage.setItem("hour2", JSON.stringify(hour2));

});

saveButton[6].addEventListener("click", function (event) {

    var hour3 = $("#calendarHour-3").val().trim();
    localStorage.setItem("hour3", JSON.stringify(hour3));

});

saveButton[7].addEventListener("click", function (event) {

    var hour4 = $("#calendarHour-4").val().trim();
    localStorage.setItem("hour4", JSON.stringify(hour4));

});

saveButton[8].addEventListener("click", function (event) {

    var hour5 = $("#calendarHour-5").val().trim();
    localStorage.setItem("hour5", JSON.stringify(hour5));

});


// original event listener: 

/*
saveButton.on("click", function (event) {

    var hour9 = $("#calendarHour-9").val().trim();
    localStorage.setItem("hour9", JSON.stringify(hour9));

    var hour10 = $("#calendarHour-10").val().trim();
    localStorage.setItem("hour10", JSON.stringify(hour10));

    var hour11 = $("#calendarHour-11").val().trim();
    localStorage.setItem("hour11", JSON.stringify(hour11));

    var hour12 = $("#calendarHour-12").val().trim();
    localStorage.setItem("hour12", JSON.stringify(hour12));

    var hour1 = $("#calendarHour-1").val().trim();
    localStorage.setItem("hour1", JSON.stringify(hour1));

    var hour2 = $("#calendarHour-2").val().trim();
    localStorage.setItem("hour2", JSON.stringify(hour2));

    var hour3 = $("#calendarHour-3").val().trim();
    localStorage.setItem("hour3", JSON.stringify(hour3));

    var hour4 = $("#calendarHour-4").val().trim();
    localStorage.setItem("hour4", JSON.stringify(hour4));

    var hour5 = $("#calendarHour-5").val().trim();
    localStorage.setItem("hour5", JSON.stringify(hour5));

});
*/