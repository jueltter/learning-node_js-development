const fs = require('fs');

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
    .options({
        a: {
            demand: true,
            describe: 'Address to fetch weather for',
            alias: 'address',
            string: true
        }
    })
    .help()
    .alias('help','h')
    .argv;
//console.log(argv);

const googleApiKey = fs.readFileSync('google-api.key', 'utf8');
geocode.geocodeAddress(googleApiKey, argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorWeather, resultsWeather) => {
            if (errorWeather) {
                console.log(errorWeather);
            }
            else {
                console.log(`It´s currently ${resultsWeather.temperature}. It feels like ${resultsWeather.apparentTemperature}.`);
            }
        });
    }
});