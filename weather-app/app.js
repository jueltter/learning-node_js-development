const fs = require('fs');

const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

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
console.log(argv);

const googleApiKey = fs.readFileSync('google-api.key', 'utf8');
geocode.geocodeAddress(googleApiKey, argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

//body.results[0].geometry.location