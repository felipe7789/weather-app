require('dotenv').config()

const { API_KEY }=process.env

var cidade = 'Sao Paulo'
var lat
var long
var temp

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


let takeSensation = (lat, long) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`
    return fetch(url)
        .then(response => response.json())
        .then(data =>{
            temp=data.main.feels_like
            return{temp}
        })
}

takeCordenate('São Paulo')
    .then(({ lat, long }) => {
        console.log('Latitude = '+ lat +'\nLongitude = ' + long)
        return takeSensation(lat, long)
    })
    .then(({temp}) => {
        console.log('Sensasao termica = '+ temp)
    })
    .catch(error => console.error('Erro:', error))
