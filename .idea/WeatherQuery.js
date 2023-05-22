var thirdPosition = '';
var secondPosition = '';
var firstPosition = '';

async function Query() {
    do {
        var town = '';
        var weatherKey = '';
        var weatherUrl = '';
        var weather2gether = '';

        var weatherTown = '';
        var weatherTemperature = '';
        var lastUpdate = '';
        var collectorWeather = '';
        var weatherIcon = '';


        thirdPosition = secondPosition;
        secondPosition = firstPosition;
// takes the town from html
        town = document.getElementById('city').value;

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

        //data output to the container
        document.getElementById('weatherQuery').innerHTML = collectorWeather;


        // to fill all fields, return to the end


        firstPosition = collectorWeather;


        document.getElementById("weatherQuery1").innerHTML = secondPosition;
        document.getElementById('weatherQuery2').innerHTML = thirdPosition;

        return collectorWeather;
        return secondPosition;
    }
    while (onclick(Query));
}

Query();