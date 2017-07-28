"use strict";


// PART 1: SHOW A FORTUNE

function showFortune() {
    alert('dfddffd');
    $.get('/fortune', function (results) {
        $('#fortune-text').html(results);
    });
}
   
// TODO: get the fortune and show it in the #fortune-text div

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function identifyForecast(results) {
    alert('Your forecast: ' + results['forecast']);

}
function showWeather(evt) {
    evt.preventDefault();
    // adds the zipcode to the url, grabbing the forecast data needed
    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    console.log(url);

    // TODO: request weather with that URL and show the forecast in #weather-info
    // gets the value at 'forcast' in the JSON
    $.get(url, identifyForecast);
}

// 'eventListender' for clicking submit, run showWeather
$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


