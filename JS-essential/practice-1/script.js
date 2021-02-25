import Backpack from "./backpack.js";
import Juice from "./juice.js";

const book = {
    color: "red",
    pages: 315,
    recommended: false,
    article:{
        author: "Greg Johnson",
        title:"Gremlins",
        year: 1998
    },
    paint: function(color){
        this.color=color
    }
};
const phone = {
    number: "5379646",
    height: 5,
    width: 2,
    "Andr-oid":"yes",
}

const bp = new Backpack(
    "carem",
    3,
    "yellow",
    15,
    30,
    32,
    false
);

const bp2 = new Backpack(
    "carem",
    3,
    "yellow",
    15,
    30,
    32,
    false
);

const j = new Juice(
    "yellow",
    "grape",
    1,
    false,
)

console.log(bp, j)
j.add_water(1)
console.log(j)