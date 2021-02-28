const fs = require('fs');
const request = require('request');

var geocodeAddress = (key, address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);
    request({
        url : `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            reject('Unable to connect Google servers');
        }
        else if (body.status === 'ZERO_RESULTS') {
            reject('Unable to find that address');
        }
        else if (body.status === 'OK') {
            resolve({
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
           
    });
    });
}

const key = fs.readFileSync('google-api.key', 'utf8');

geocodeAddress(key,'19146').then((location)=> {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log("Error:", errorMessage);
});