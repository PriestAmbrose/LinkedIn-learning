

public class Simulator {
 
	public static void main(String[] args) {
 
		BasicCameraApp basic = new BasicCameraApp();
		basic.take();
		basic.save();
		basic.edit();
		basic.share(new ShareWithText());

		/*MallardDuck	mallard = new MallardDuck();
		FlyBehavior cantFly = () -> System.out.println("I can't fly");
		QuackBehavior squeak = () -> System.out.println("Squeak");
		RubberDuck	rubberDuckie = new RubberDuck(cantFly, squeak);
		DecoyDuck	decoy = new DecoyDuck(); */
 
		PhoneCameraApp	 plus = new CameraPlusApp();
		plus.take();
		plus.save();
		plus.edit();
		plus.share(new ShareByEmail());

		basic.share(new ShareViaMedia());
		
/*
		mallard.performQuack();
		rubberDuckie.performQuack();
		decoy.performQuack();
   
		model.performFly();	
		model.setFlyBehavior(new FlyRocketPowered());
		model.performFly();*/
	}
}
