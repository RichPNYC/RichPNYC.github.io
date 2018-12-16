document.querySelector('#click-me').onclick = lifetimeSupply;


function lifetimeSupply () {
var currentAge = document.querySelector('#age').value;
var finalAge = document.querySelector('#max-age').value;
var drinksDay = document.querySelector('#num-per-day').value;


var totalDrinks = (finalAge - currentAge) *  (365 * drinksDay)


//I originally used the below commented out code to calculate "totalDrinks" before settling on the above code. Why doesn't the more complex code commented out below work?
//function yearsCalculation () {
//    var totalYears = finalAge - currentAge;
//}

//yearsCalculation ();

//function drinksCalculation () {
//    var totalDrinks = totalYears * drinksDay;
//}

//drinksCalculation ();

document.querySelector('#solution').innerHTML = totalDrinks;


var drinkItem = document.querySelector('#item').value;

document.querySelector('#drink').innerHTML = drinkItem;
}