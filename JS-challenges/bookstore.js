class Book {
    constructor (Title, Author, ISBN, numCopies){
        this.Title=Title;
        this.Author=Author;
        this.ISBN=ISBN;
        this.numCopies = numCopies;
    };

    get getAmount(){
        return this.numCopies;
    }

    set setAmount(newAmount){
        this.numCopies=newAmount;
    }

    getAvailability(){
        switch(true){
            case this.getAmount===0:
                return "out of stock";
                break;
            case this.getAmount>0 && this.getAmount<10:
                return "low stock";
                break;
            case this.getAmount>=10:
                return "in stock";
                break;
            default:
                console.error("wrong input for getAvailability", this);
        }
    };

    sell(numSold=1){
        if (this.getAmount>=numSold){
            this.setAmount=this.getAmount-numSold;
        } else{
            console.error(this.getAvailability());
        }
    }

    restock(numCopies=5){
        this.setAmount=this.getAmount+numCopies;
    }
}

const HungerGames = new Book("Hunger Games", "Suzane Collins", 123919, 5);
console.log(HungerGames.getAvailability());
HungerGames.restock(12);
console.log(HungerGames.getAvailability());
HungerGames.sell(17);
console.log(HungerGames.getAvailability());