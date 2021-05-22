console.log("Hello");

const warrior = "Ninja";

const screamWarrior = ()=>{
    let warrior2 = "Samurai";
    return {
        shootWarrior: ()=>{
            console.log(warrior,warrior2);
        }
    }
}
const newWarrior = screamWarrior();
newWarrior.shootWarrior();
//console.log(warrior,warrior2);