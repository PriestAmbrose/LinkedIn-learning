public class Cheese extends ToppingDecorator {
	
	public Cheese(CrustPizza crustPizza) {
		this.crustPizza = crustPizza;
	}

	public String getDescription() {
		return crustPizza.getDescription() + ", Cheese";
	}

	public double cost() {
		return .10 + crustPizza.cost();
	}
}
