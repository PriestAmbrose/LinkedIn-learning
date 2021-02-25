function Juice(
    color,
      taste,
      amount,
      good,
) {
 
        this.color = color;
        this.taste = taste;
        this.amount = amount;
        this.good = good;
        this.change_taste = function(taste){
            this.taste=taste
        };
        this.add_water = function (addon){
            this.amount+=addon;
        }
    };
    

export default Juice;