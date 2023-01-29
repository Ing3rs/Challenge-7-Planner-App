// notes from class
// ----------------

/*

> use moment.js

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

*/


// DEFINE VARIABLES
// -----------------------------------------

// object for each time of day for local storage to push to?


// CURRENT DATE & TIME
// -----------------------------------------



// MAIN FUNCTIONS
//------------------------------------------

// calendar color coding


// pull local storage



// EVENT LISTENERS
// -----------------------------------------

// save button
// (look at last weeks challenge - highscore board for local storage?)
// (include successfully added message at top of calendar) - maybe add a jQuery dialogue box instead?
