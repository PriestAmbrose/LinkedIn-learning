// const planet  = "Earth"
// console.log(planet.endsWith("th"))
// console.log(planet.startsWith("Ear"))
// console.log(planet.includes("h"))
// console.log(planet.search("art"))
// console.log(`${planet}`.search("th"));    

// const delay = (seconds)=>
//     new Promise((resolve, reject) =>{
//         if (typeof seconds !=="number"){
//             reject(
//                 new Error("seconds must be a number")
//             );
//         }
//     setTimeout(resolve, seconds * 1000);
//     });

// console.log("Zero seconds");
// delay(1).then(()=>console.log("1 sec"));

const spacePeople=()=>{
    return new Promise((resolve, reject)=>{
        const api = "http://api.open-notify.org/astros.json";
        const request = new XMLHttpRequest();
        request.open("GET",api);
        request.onload = ()=>{
            if (request.status ===200){
                resolve(JSON.parse(request.response))
            } else {
                reject(Error(request.statusText));
            }
        };
        request.onerror = err=> reject(err);
        request.send();
    });
};

spacePeople().then((spaceData)=>
console.log(spaceData),
(err) => console.log(new Error ("Can't load people"))
);

    
