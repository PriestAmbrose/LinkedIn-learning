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
            
        }
    }
}

const civic = new Car(4, 'V6', 'grey');
const cx5 = new SUV(4, 'V8', 'red');
console.log(civic);
console.log(cx5);
