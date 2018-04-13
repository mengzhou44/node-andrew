const axios = require('axios');
const apiKey = '4e75757da5e777db5e915431901464be';

const getWeather = ({ latitude, longitude }) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://api.darksky.net/forecast/${apiKey}/${latitude},${longitude}`)
            .then(
            response => {
                resolve({
                    temperature: response.data.currently.temperature,
                    apparentTemperature: response.data.currently.apparentTemperature

                });
            }).
            catch(error => {
                reject('Unable to fetch weather');
            })
    });
};

module.exports = { getWeather };


