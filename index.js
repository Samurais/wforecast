/**
* a heweathor api
*/

const request = require('superagent'),
    Q = require('q'),
    log = require('debug')('wforecast');


const baseUrl = "https://api.heweather.com/x3";


var WForewast = function(apiKey){
    if(!apiKey) throw new Error('Invalid token, get it from http://www.heweather.com/my/service');
    this.key = apiKey;
}


WForewast.prototype.getWeatherByCity = function(city){
    let defer = Q.defer();
    request
        .get(baseUrl+"/weather?city="+city+"&key="+this.key)
        .set('Accept','application/json')
        .end(function(err, res){
            if(err) return defer.reject(err);
            defer.resolve(res.body);
        }); 

    return defer.promise;
}


exports = module.exports = (apiKey) => {
    return new WForewast(apiKey);
};
