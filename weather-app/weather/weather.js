const fs = require('fs');
const request = require('request');

var getWeather = (lat, lng, callback) => {
    getKey('./weather/openweathermap-api.key', (errkey, key) => {
        if (errkey) {
            callback(`Error at getting openweathermap key: ${errkey}`);
        }
        else {
            request({
                url: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`,
                json: true
            }, (error, response, body) => {
                if (!error && body.cod === 200) {
                    callback(undefined, {
                        temperature: body.main.temp,
                        apparentTemperature: body.main.feels_like
                    });
                }
                else {
                    callback('Unable to fetch weather');
                }               
            });
        }        
    });
}

var getKey = (file, callback) => {
    fs.readFile(file,'utf8', (err, data) => {
        if (err) {
            callback('Error at reading file');
        }
        else {
            callback(undefined, data);
        }
    });
}

module.exports = {
    getWeather
}