'use strict';

const url='https://us-street.api.smartystreets.com/street-address?street=86%20Frontage%20Road&street2=&city=Belmont&state=MA&zipcode=&candidates=10&match=invalid&auth-id=ad82d9ab-c90e-c133-8f2a-bc32bf0b0be7&auth-token=mr3i535z5SF7Ojv80iWS';

const createRequest = function(url){
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange',(url)=> {
        if(httpRequest.readyState === 4) {
            console.log(httpRequest.responseText);
        }
    });
    httpRequest.open('GET',url);
    httpRequest.send();
};
createRequest(url);