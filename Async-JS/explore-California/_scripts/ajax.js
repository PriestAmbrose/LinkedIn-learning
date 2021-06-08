// add global variable containing XHR object here

let httpRequest = new XMLHttpRequest();
// add get() function here
function get(url){
    return new Promise(function(resolve,reject){
        httpRequest.open('GET', url);
        httpRequest.onload = function(){
            if (httpRequest.status === 200){
                resolve(httpRequest.responseText);
            } else {
                reject(Error(httpRequest.status));
            }
        }
        httpRequest.send();
    }   
    );
}

function failHandler(status){
    console.log(status);
    const weatherDiv = document.querySelector('#weather');
    weatherDiv.classList.remove('hidden');

}

function tempToF(kelvin) {
    return ((kelvin - 273.15) * 1.8 + 32).toFixed(0);
}

function successHandler(data) {
    const dataObj = JSON.parse(data);
    const weatherDiv = document.querySelector('#weather');
    const weatherFragment = `
        <h1>Weather</h1>
        <h2 class="top">
        <img
            src="http://openweathermap.org/img/w/${dataObj.weather[0].icon}.png"
            alt="${dataObj.weather[0].description}"
            width="50"
            height="50"
        />${dataObj.name}
        </h2>
        <p>
        <span class="tempF">${tempToF(dataObj.main.temp)}&deg;</span> | ${dataObj.weather[0].description}
        </p>
    `
    weatherDiv.innerHTML = weatherFragment;
    weatherDiv.classList.remove('hidden');
}

document.addEventListener('DOMContentLoaded', function() {
    const apiKey = ''//'322692ec6600b7c5b6f5e33a6a844eb8';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=los+angeles&APPID=' + apiKey;
    // add get() function call here
    //get(url, successHandler, failHandler);
    //console.log(get(url));
    get(url)
        .then(function(response){
            successHandler(response);
        })
        .catch(function(status){
            failHandler(status);
        });
});
