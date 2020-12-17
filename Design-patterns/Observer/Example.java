

public class Example {

	public static void main(String[] args) {
		WeatherStation weatherStation = new WeatherStation();
	
		Observer userInterface = new UserInterface(weatherStation);
		Logger logger = new Logger(weatherStation);
		AlertSystem alertSystem = new AlertSystem(weatherStation);


		weatherStation.setValue(80,90,230);
	}
}
