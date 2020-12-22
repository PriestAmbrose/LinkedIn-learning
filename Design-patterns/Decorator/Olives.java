

public class Olives extends ToppingDecorator {
	CrustPizza crustPizza;

	public Olives(CrustPizza crustPizza) {
		this.crustPizza = crustPizza;
	}

	public String getDescription() {
		return crustPizza.getDescription() + ", Olives";
	}

	public double cost() {
		return .10 + crustPizza.cost();
	}
}
