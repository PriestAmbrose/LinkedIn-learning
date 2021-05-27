let instance = null;



class Car {
    constructor(doors,engine,color){
        if (!instance){
            this.doors=doors;
            this.engine =engine;
            this.color =color;
            instance = this;
        }
        else {
            return instance;
        }
        
        
    }
}




const civic = new Car(4, 'V6', 'grey');
const cx5 = new Car(2, 'V8', 'red');
console.log(civic);
console.log(cx5);
