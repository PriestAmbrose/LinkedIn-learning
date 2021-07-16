'use strict';

const url='https://developer.nps.gov/api/v1/parks?stateCode=CA&api_key=A38z0Bhk602hkKEXLwIl36d41ki9WdUx7m08X8Wo';

const updateUISuccess = function(data){
    console.log(data);
}

const updateUIError = function(error){
    console.log(error);
}
const responseMethod = function(httpRequest){
    if(httpRequest.readyState === 4){
        if(httpRequest.status === 200){
            updateUISuccess(httpRequest.responseText);
        } else {
            updateUIError(httpRequest.status + ': ' + httpRequest.responseText);

        }
    }
}
const createRequest = function(url){
    const httpRequest = new XMLHttpRequest(url);
    httpRequest.addEventListener('readystatechange',(url)=>responseMethod(httpRequest));
    httpRequest.open('GET',url);
    httpRequest.send();
};
createRequest(url);


