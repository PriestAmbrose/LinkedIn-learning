

public class Peppers extends ToppingDecorator {
	
	public Peppers(CrustPizza crustPizza) {
		this.crustPizza = crustPizza;
	}

	public String getDescription() {
		return crustPizza.getDescription() + ", Peppers";
	}

	public double cost() {
		return .10 + crustPizza.cost();
	}
}
