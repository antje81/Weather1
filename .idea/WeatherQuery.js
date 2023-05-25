var thirdPosition = '';
var secondPosition = '';
var firstPosition = '';

var weatherIcon = '';
var weatherIcon2 = '';
var weatherIcon3 = '';

var town3 = '';
var town2 = '';
var town1 = '';

var position1 = '';
var position2 = '';
var position3 = '';

var icon1 = '';
var icon2 = '';
var icon3 = '';

var state = '';

async function Query() {


    var town = '';
    var weatherKey = '';
    var weatherUrl = '';
    var weather2gether = '';

    var weatherTown = '';
    var weatherTemperature = '';
    var lastUpdate = '';
    var collectorWeather = '';


    town = document.getElementById('city').value;


// takes the town from html


    weatherKey = 'e2825f3064b3480eb6690224230505';
    weatherUrl = 'http://api.weatherapi.com/v1/current.json?';

    // weather URL + api key. `` this is a keyword
    weather2gether = weatherUrl + 'key=' + weatherKey + '&q=' + town;

    // fetch get's the url + key through weather2gether
    var response = await fetch(weather2gether);
    var jsonResult = await response.json();


// all queries
    weatherTown = jsonResult.location.name;
    weatherIcon = jsonResult.current.condition.icon;
    weatherTemperature = jsonResult.current.temp_c;
    lastUpdate = jsonResult.current.last_updated;

    // text and html code are identified by quotation marks
    collectorWeather = 'town:' + weatherTown + '<br>' + 'temperature now:' + weatherTemperature + ' Celsius ' + '<br>' + 'last update, local time: ' + lastUpdate;

    function cityQuery() {


        if (town == town1) {
            state.position1 = {discription: firstPosition, icon: icon1};
            return;
        }
        if (town == town2) {
            state.position2 = {discription: secondPosition, icon: icon2};
            return;

        }
        if (town == town3) {
            state.position3 = {discription: thirdPosition, icon: icon3};
            return;
        }
            town3 = town2;
            town2 = town1;
            town1 = town;

            thirdPosition = secondPosition;
            secondPosition = firstPosition;
            firstPosition = collectorWeather;

            icon3 = icon2;
            icon2 = icon1;
            icon1 = weatherIcon;


            state = {
                position1: {discription: firstPosition, icon: icon1},
                position2: {discription: secondPosition, icon: icon2},
                position3: {discription: thirdPosition, icon: icon3},
            }


    }

    cityQuery();

    document.getElementById('weatherQuery').innerHTML = state.position1.discription;
    document.getElementById('weatherIcon1').src = state.position1.icon;

    document.getElementById("weatherQuery1").innerHTML = state.position2.discription;
    document.getElementById('weatherIcon2').src = state.position2.icon;

    document.getElementById('weatherQuery2').innerHTML = state.position3.discription;
    document.getElementById('weatherIcon3').src = state.position3.icon;


}