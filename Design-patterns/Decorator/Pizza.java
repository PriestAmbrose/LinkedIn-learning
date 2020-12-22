

public class Pizza {
 
	public static void main(String args[]) {
		CrustPizza crustPizza1 = new ThinCrustPizza();
		System.out.println(crustPizza1.getDescription() 
				+ " $" + crustPizza1.cost());
 
		CrustPizza crustPizza2 = new ThickCrustPizza();
		crustPizza2 = new Cheese(crustPizza2);
		crustPizza2 = new Olives(crustPizza2);
		crustPizza2 = new Peppers(crustPizza2);
		System.out.println(crustPizza2.getDescription() 
				+ " $" + crustPizza2.cost());
 
	}
}
