class Car {
    constructor(doors,engine,color){
        this.doors=doors;
        this.engine =engine;
        this.color =color;
        
    }
}

class carFactory {
    createCar(type){
        switch(type){
            case 'civic':
                return new Car(4, 'V6', 'grey');
            case 'honda':
                return new Car(4, 'V8', 'red');

            
        }
    }
}

const factory = new carFactory();
const myHonda  = factory.createCar('honda');

console.log(myHonda);