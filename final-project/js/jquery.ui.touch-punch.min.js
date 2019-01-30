$('.cold').hide();
$('.hot').hide();

document.querySelector('#convert-fahrenheit').onclick = convertFahrenheit;

function convertFahrenheit() {
    var fahrenheit = document.querySelector('#input-fahrenheit').value;
    var convertedFahrenheit = (fahrenheit - 32) * 5 / 9;

    document.querySelector('#output-converted-fahrenheit').innerHTML = convertedFahrenheit;

    if (convertedFahrenheit > 32) {
        $('body').css('background-color','red');
        $('.hot').show();
        $('.cold').hide();
    } else if (convertedFahrenheit < 10) {
        $('body').css('background-color', 'blue');
        $('.cold').show();
        $('.hot').hide();
    } else {
        $('body').css('background-color', 'green');
    }
}

document.querySelector('#convert-celcius').onclick = convertCelcius

function convertCelcius() {
    var celcius = document.querySelector('#input-celcius').value;
    var convertedCelcius = (celcius * (9 / 5)) + 32;

    document.querySelector('#output-converted-celcius').innerHTML = convertedCelcius;
 
    if (convertedCelcius > 90) {
        $('body').css('background-color','red');
        $('.hot').show();
        $('.cold').hide();
    } else if (convertedCelcius < 50) {
        $('body').css('background-color', 'blue');
        $('.cold').show();
        $('.hot').hide();
    } else {
        $('body').css('background-color', 'green');
    }
}


