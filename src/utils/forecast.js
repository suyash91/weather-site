const request = require('request')

const forecast = (latitude, longitude, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=b76416efe8b3aab7422c4245dc9d6999&query='+longitude+','+latitude


    request({ url, json: true }, (error, response) => {
        
            callback(undefined, response.body)
        
    })
}

module.exports = forecast