const axios = require('axios');

const geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}`)
            .then(
            response => {
                if (response.data.status === 'ZERO_RESULTS') {
                    throw new Error('Unable to find that address.');
                }
                resolve({
                    address: response.data.results[0].formatted_address,
                    latitude: response.data.results[0].geometry.location.lat,
                    longitude: response.data.results[0].geometry.location.lng
                });
            })
            .catch((error) => {
                reject(error);
            });
    });
}

module.exports = {
    geocodeAddress
}




