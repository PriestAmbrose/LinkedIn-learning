const dishes = [
    {
        name: "Eggplant Parmesan",
        vegetarian:true
    },
    {
        name: "Spaghetti & Meatballs",
        vegetarian: false
    }
];
document.getElementById('vegetarian').addEventListener('change', evt=>{
    let displayedDishes = document.getElementById('vegetarian').checked 
    ? dishes.filter(dish=>dish.vegetarian)
    : dishes;
    document.getElementById('dishes').innerHTML='';
    displayedDishes.forEach(dish=>{
        document.getElementById('dishes').innerHTML+=`<li>${dish.name}</li>`;
    });
});




