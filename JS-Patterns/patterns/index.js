class Car {
    constructor(doors,engine,color){
        this.doors=doors;
        this.engine =engine;
        this.color =color;
        
    }
}

class CarFactory {
    createCar(model){
        switch(model){
            case 'civic':
                return new Car(4, 'V6', 'grey');
            case 'honda':
                return new Car(4, 'V8', 'red');

            
        }
    }
}

class SUV {
    constructor(doors,engine,color){
        this.doors=doors;
        this.engine =engine;
        this.color =color;
        
    }
}

class SuvFactory {
    createCar(model){
        switch(model){
            case 'cx5':
                return new SUV(4, 'V6', 'grey');
            case 'sante fe':
                return new SUV(4, 'V8', 'red');

            
        }
    }
}


let carMixin = {
    revEngine(){
        console.log(`The ${this.engine} is doing`);
    }
}

const carFactory = new CarFactory();
const suvFactory = new SuvFactory();
const autoManufacturer = (type, model)=>{
    switch(type){
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer('car', 'honda');


honda.revEngine();

console.log(cx5);