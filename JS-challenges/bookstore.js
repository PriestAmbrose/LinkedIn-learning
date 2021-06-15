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
        this.Amount=newAmount;
    }

    getAvailability(){
        switch(true){
            case getAmount===0:
                return "out of stock";
                break;
            case getAmount>0 && getAmount<10:
                return "low stock";
                break;
            case getAmount>=10:
                return "in stock";
                break;
            default:
                console.error("wrong input for getAvailability", this);
        }
    };

    sell(numSold=1){
        if (getAmount>=numSold){
            setAmount(getAmount-numSold);
        } else{
            console.error(getAvailability());
        }
    }

    restock(numCopies=5){
        setAmount(getAmount+numCopies);
    }
}