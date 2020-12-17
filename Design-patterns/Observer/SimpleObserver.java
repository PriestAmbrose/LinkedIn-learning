
	
public class SimpleObserver implements Observer {
	private float temperature = 0;
	private float windSpeed = 0;
	private float pressure = 0;
	private Subject WeatherStation;
	
	public SimpleObserver(Subject WeatherStation) {
		this.WeatherStation = WeatherStation;
		WeatherStation.registerObserver(this);
	}
	
	public void update(float temperature,float windSpeed,float pressure) {
		this.temperature= temperature;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		display();
	}
	
	public void display() {
		System.out.println("Value: " + temperature + windSpeed + pressure);
	}
}
