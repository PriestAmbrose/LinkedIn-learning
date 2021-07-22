'use strict';

//const zipUrl='https://us-street.api.smartystreets.com/street-address?key=102472014738500410';
//const parkUrl = 'https://developer.nps.gov/api/v1/parks?stateCode=ca&api_key=A38z0Bhk602hkKEXLwIl36d41ki9WdUx7m08X8Wo';
const zipUrl='https://exp-cal-prox.herokuapp.com/street/street-address?';
const parkUrl = 'https://exp-cal-prox.herokuapp.com/nps/api/v1/parks?stateCode=ca';
const parksFallback = {
    "url": "https://www.nps.gov/alca/index.htm",
    "fullName": "Alcatraz Island",
    "description": "Alcatraz reveals stories of American incarceration, justice, and our common humanity. This small island was once a fort, a military prison, and a maximum security federal penitentiary. In 1969, the Indians of All Tribes occupied Alcatraz for 19 months in the name of freedom and Native American civil rights. We invite you to explore Alcatraz's complex history and natural beauty.",
}
const smartyInit = {
    header: {
        'Content-Type':'application/json',
        Host: 'us-street.api.smartystreets.com',
    },
}
const addressField = document.querySelector('#address'); //reference to input box
const cityField = document.querySelector('#city');
const stateField = document.querySelector('#state');
//const $zipField = $('#zip');
const zipField = document.querySelector('#zip');
const specials = document.querySelector('#specials');
const parkThumb = document.querySelector('#specials h2 img');
const parkName = document.querySelector('#specials h2 a');
const parkDescription = document.querySelector('#specials p') 

const updateUISuccess = function(parsedData){
    //const parsedData = JSON.parse(data);
    console.log(parsedData);
    const zip = parsedData[0].components.zipcode;
    const plus4 = parsedData[0].components.plus4_code;
    zipField.value =zip+'-'+plus4;

}

const updateParkSuccess = function(parsedData){
    
    console.log(parsedData);
    const parkData = parsedData.data[Math.floor(Math.random() * parsedData.total)];
    
    parkThumb.src='https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png';
    //const parsedData = JSON.parse(data);
    parkName.textContent = parkData.fullName;
    parkName.href = parkData.url;
    parkDescription.textContent=parkData.description;
    specials.classList.remove('hidden');

}

const updateUIError = function(error){
    console.log(error);

    parkThumb.src='https://www.nps.gov/common/commonspot/templates/assetsCT/images/branding/logo.png';
    parkName.textContent = parksFallback.fullName;
    parkName.href = parksFallback.url;
    parkDescription.textContent=parksFallback.description;
    specials.classList.remove('hidden');
}
// const responseMethod = function(httpRequest,success,fail){
//     if(httpRequest.readyState === 4){
//         if(httpRequest.status === 200){
//             success(httpRequest.responseText);
//         } else {
//             fail(httpRequest.status + ': ' + httpRequest.responseText);

//         }
//     }
// }


// const createRequest = function(url,success,fail){
//     const httpRequest = new XMLHttpRequest(url);
//     httpRequest.addEventListener('readystatechange',(url)=>responseMethod(httpRequest,success,fail));
//     httpRequest.open('GET',url);
//     httpRequest.send();
// };

const handleErrors = function(response){
    if(!response.ok){
        throw new Error((response.status + ': ' + response.statusText));
    }
    return response.json();
}

const createRequest = function(url, succeed, fail, init){
    fetch(url, init)
        .then((response)=>handleErrors(response))
        .then((data)=>succeed(data))
        .catch((error)=>fail(error));
};


const checkCompletion = function(){
    if (addressField.value !== '' &&  
        cityField.value !== '' && 
        stateField !== ''){
            const requestUrl = zipUrl + 
                'street=' + addressField.value + 
                '&city=' + cityField.value + 
                '&state=' + stateField.value;
            createRequest(requestUrl,updateUISuccess,updateUIError, smartyInit);
    }
}

addressField.addEventListener('blur', checkCompletion);
cityField.addEventListener('blur', checkCompletion);
stateField.addEventListener('blur', checkCompletion);

window.addEventListener('DOMContentLoaded', ()=>{
    createRequest(parkUrl,updateParkSuccess,updateUIError);
});


