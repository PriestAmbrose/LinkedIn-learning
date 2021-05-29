let mixin = {
    madeIn(){
        console.log('this car was made in year 2018');
    }
}

let carMixin = {
    __proto__ :mixin,

    madeIn(){
        super.madeIn();
    }
};

sayHi();
class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
     
    carStats(){
        return `This car has ${this.doors} doors, a ${this.engine} engine and a ${this.color}`
    }

    static totalDoors(car1, car2){
        const doors1 = car1.doors;
        const doors2 = car2.doors;
        return doors1+doors2;
    }
}

class SUV extends Car {
    constructor(doors, engine, color, brand, carStats){
        super(doors,engine, color,carStats);
        this.brand = brand;
        this.wheels = 4;
        this.ac = true;

        Object.assign(this, carMixin);
    }

    myBrand(){
        return console.log(`This SUV is a ${this.brand}`);
    }
}

const cx5 = new Car(4, 'V6', 'grey');
const suv  = new SUV(4,'v5','grey','mazda',)
const civic = new Car(2,'v4', 'blue')
console.log(cx5);
console.log(civic);
console.log(suv.madeIn());
console.log(suv.myBrand());
console.log(cx5.carStats());
console.log(Car.totalDoors(cx5, civic));

function sayHi(){
    return console.log("Helllo this function can be called anywerher");
}