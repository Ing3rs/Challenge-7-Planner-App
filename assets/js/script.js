// notes from class
// ----------------

/*

when adding an event 'appointment added to local storage' message above main calendar

compare the current time using moment.js to the hour in the day

if current hour is greater than hours in the day (greyed out as in past)
current hour is the same (highlight red)
current hour is less than hours in in the day (green as in future)

compare time together: 
moment().hour() - give current hour
then compare this to hours in calendar

calendar is 9-5
easier to compare if 24 hr clock

the save button will need an event listener to pick up when users click it and put the input in local storage

add time blocks in html file

should only be able to save one event in each time block but can be multi-line

save button changes color when hovered over

*/

// Challenge equirements: 
// ----------------------

/* The app should:

- Display the current day at the top of the calendar when a user opens the planner.
- Present timeblocks for standard business hours when the user scrolls down.
- Color-code each timeblock based on past, present, and future when the timeblock is viewed.
- Allow a user to enter an event when they click a timeblock.
- Save the event in local storage when the save button is clicked in that timeblock.
- Persist events between refreshes of a page.

*/


// Pseudocode
// -----------

/*

> current date at the top under the header text

> calendar blocks are 9am - 5pm
    > grey = past times
    > red = current time
    > green = future time

    > each calendar block is an input field

    > save icon on far right which has hover affect
        > on click, save user input into local storage and remain after page refresh
        > removing text and save, clears field/local storage
    
> if time, add some flair... (dark mode? lesson 01/03)

> check it' responsive

*/

// MY CODE
// ------------------------------------------------------------

var saveButton = $('.saveBtn');
var confirmationMsg = $('#confirmationMessage');

// current date & time
var today = moment().format("dddd Do MMMM YYYY");
var currentHour = moment().format("HH");

// print today's date at top of page: 
$("#currentDay").text(today);

// Calendar times for checkTime()
// must be an easier way to do this? if statement or moment calendar?

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



// MAIN FUNCTIONS
//------------------------------------------

// calendar color coding
function checkTime() {

    var calendarHours = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

    var hourBlock = [nineAMBlock, tenAMBlock, elevenAMBlock, twelvePMBlock, onePMBlock, twoPMBlock, threePMBlock, fourPMBlock, fivePMBlock];

    for (var i = 0; i < calendarHours.length; i++)

        if (calendarHours[i] > currentHour) {
            hourBlock[i].addClass('future');

        } else if (calendarHours[i] < currentHour) {
            hourBlock[i].addClass('past');

        } else {
            hourBlock[i].addClass('present');
        }
}

checkTime();

// store calendar events


// retrieve calender events

function retrieveEvents() {

    var hour9 = JSON.parse(localStorage.getItem('hour9'));
    nineAMBlock.text(hour9);

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

retrieveEvents();


// save button even listener (would work better on each individual button)

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

    // displayMessage('confirm', "Event saved!");

    
});

// // display message
// function displayMessage(type, message) {
//     var msgP = document.createElement("p");
//     msgP.textContent = message;
//     msgP.setAttribute("class", type);
//     confirmationMsg.append(msgP)

//     // remove message after 2 seconds to stop messages stacking up  
//     clearTimeout(messageTimeout);
//     var messageTimeout = setTimeout(function () {
//         msgP.classList.add("hide");
//     }, 1000);

// }