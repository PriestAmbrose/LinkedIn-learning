const warriors = [
    {
        name: "hi",
        quality: "high"
    },
    {
        name: "viking",
        quality: "not high"
    },
    {
        name: "not viking",
        quality: "high"
    }
];

const listWarrior = ()=>{
    for (const warrior of warriors){
        console.log(warrior);
        if(warrior.quality ==="high"){
            console.log("list", warrior);
        }
    }
}
listWarrior();
console.log(warriors)