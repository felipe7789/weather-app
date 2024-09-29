require('dotenv').config()

const { API_KEY }=process.env

var cidade = 'Sao Paulo'
var lat
var long

let takeCordenate = (cidade) => {
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cidade}&limit=1&appid=${API_KEY}`
    return fetch(url)
        .then(response => response.json())
        .then(data =>{
            lat = data[0].lat;
            long = data[0].lon;
            return {lat,long};  
        })
}

