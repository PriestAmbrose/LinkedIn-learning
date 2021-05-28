const planet  = "Earth"
console.log(planet.endsWith("th"))
console.log(planet.startsWith("Ear"))
console.log(planet.includes("h"))
console.log(planet.search("art"))
console.log(`${planet}`.search("th"));    

const delay = (seconds)=>
    new Promise((resolve, reject) =>{
        if (typeof seconds !=="number"){
            reject(
                new Error("seconds must be a number")
            );
        }
    setTimeout(resolve, seconds * 1000);
    });

console.log("Zero seconds");
delay(1).then(()=>console.log("1 sec"));

    
