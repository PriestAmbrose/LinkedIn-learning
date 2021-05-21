function print(firstName){
    console.log(`Hello ${firstName}`);
}

print("Jenny")

function createEmail (firstName, price){
    let shipping = 5.95;
    console.log(`Hi ${firstName}! Thanks!
    Total: $${price}
    Shippting: $${shipping}
    Grand Total: $${price+shipping}`)
}

createEmail("Jenny", 5.68);