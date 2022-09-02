// Weather API

let weatherDiv = document.getElementById("weather-details")
let weatherBtn = document.getElementById("weather-btn")
let city = document.getElementById("city")

weatherBtn.addEventListener("click", getWeather)


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83ebfa262fmsh521901ff73458bap19aed1jsn3fe72d37728d',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
}

function getWeather () {
    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city.value}`, options)
    .then((response) => response.json())
    .then((data) => {

weatherDiv.innerHTML += `<h2 id="location">${data.location.name}</h2>` 
weatherDiv.innerHTML += `<img id="weather-img" src="${data.current.condition.icon}"/>`       
weatherDiv.innerHTML += `<h1 id="temp">${data.current.temp_c}</h1>`
weatherDiv.innerHTML += `<h2 class="desc">${data.current.condition.text}</h2>`
weatherDiv.innerHTML += `<img id="wind" src="https://images.emojiterra.com/openmoji/v13.1/512px/1f32c.png">`  
weatherDiv.innerHTML += `<h2 class="desc">${data.current.wind_kph} km/h</h2>`


    }
        )
  
    
    city.value = "" 
     
}



// Giphy

let gifDiv = document.getElementById("gif-images")
let gifBtn = document.getElementById("gif-btn")
let search = document.getElementById("gif-input")

gifBtn.addEventListener("click", getGif)



function getGif () {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=4FSVFWc5m2GXbMEw8BLwrfIbFEUT0gB7&q=${search.value}&limit=6&offset=0&rating=g&lang=en`)
    .then((response) => response.json())
    .then((data) => {
       
        for (let i= 0; i< data.data.length; i++) {
            gifDiv.innerHTML += `<img id="gif-pics" src="${data.data[i].images.downsized_medium.url}"/>`
           
        }
    } 
    
    
    )   
}



// Bored Bot API

let activityDiv = document.getElementById("activity")
let activityBtn = document.getElementById("activity-btn")

activityBtn.addEventListener("click", getActivity)



function getActivity () {
    fetch("https://www.boredapi.com/api/activity/")
    .then((response) => response.json())
    .then((data) => activityDiv.innerHTML = `<h3>${data.activity}</h3`
    
    
    )   
}




