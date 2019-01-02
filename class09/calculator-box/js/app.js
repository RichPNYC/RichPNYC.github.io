let total = 0

const plusTen = $('#a10');

plusTen.click(addTen);

function addTen () {
    total = total + 10;
    $('#out').html(total);
}


const plusTwenty = $('#a20');

plusTwenty.click(addTwenty);

function addTwenty () {
    total = total + 20;
    $('#out').html(total);
}


const plusThirty = $('#a30');

plusThirty.click(addThirty);

function addThirty () {
    total = total + 30;
    $('#out').html(total);
}


const minusTen = $('#n10');

minusTen.click(subtractTen);

function subtractTen () {
    total = total - 10;
    $('#out').html(total);
}


const minusTwenty = $('#n20');

minusTwenty.click(subtractTwenty);

function subtractTwenty () {
    total = total - 20;
    $('#out').html(total);
}


const minusThirty = $('#n30');

minusThirty.click(subtractThirty);

function subtractThirty () {
    total = total - 30;
    $('#out').html(total);
}


const plusRed = $('#red');

plusRed.click(addRed);

function addRed () {
    $('#out').css('background', 'red');
}

const plusBlue = $('#blue');

plusBlue.click(addBlue);

function addBlue () {
    $('#out').css('background', 'blue');
}



// 1. Add .click() event handlers for each of the boxes:


// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, let count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - .html()
// - .css()
