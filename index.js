/**
* a heweathor api
*/

const request = require('axios'),
    Q = require('q'),
    log = require('debug')('wforecast'),
    _ = require('lodash');


const baseUrl = "https://free-api.heweather.com/v5";


var WForewast = function (apiKey) {
    if (!apiKey) throw new Error('Invalid token, get it from http://www.heweather.com/my/service');
    this.key = apiKey;
}


WForewast.prototype.getWeatherByCity = function (city) {
    let defer = Q.defer();
    let url = baseUrl + "/weather?city=" + encodeURIComponent(city) + "&key=" + this.key
    request
        .get(url)
        .then((res)=>{
            defer.resolve(res.data.HeWeather5[0].suggestion);
        })
        .catch(function (err) {
            if (err) return defer.reject(err);
        });

    return defer.promise;
}


exports = module.exports = (apiKey) => {
    return new WForewast(apiKey);
};
