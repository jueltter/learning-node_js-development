const fs = require('fs');
const yargs = require('yargs');
const axios = require('axios');

const keys = require('./keys/keys.js');

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


// TODO convert to async
const googleApiKey = fs.readFileSync('google-api.key', 'utf8');
const openweathermapApiKey = fs.readFileSync('openweathermap-api.key', 'utf8');

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?key=${googleApiKey}&address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address.');
    }
    console.log(response.data.results[0].formatted_address);
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${openweathermapApiKey}`;
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.main.temp;
    var apparentTemperature = response.data.main.feels_like
    console.log(`It´s currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers,');
    }
    else {
        console.log(e.message);
    }
});

keys.getKeyFromFile('google-api.key').then((key) => {
    console.log(key);
}).catch((e) => {
    console.log(e);
});