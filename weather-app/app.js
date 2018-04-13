
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs.
    options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    }).
    help().
    alias('help', 'h').
    argv;

geocode.geocodeAddress(encodeURIComponent(argv.a))
    .then(address => {
        const { latitude, longitude } = address;
        return weather.getWeather({ latitude, longitude });
    })
    .then(data => {
        console.log(`Weather result: temperature is ${data.temperature}, and it feels like ${data.apparentTemperature}`);
    })
    .catch(error => {
        if (error.response.status === 404) {
            console.log('Unable to find api server!');
        } else {
            console.log(error);
        }

    });

