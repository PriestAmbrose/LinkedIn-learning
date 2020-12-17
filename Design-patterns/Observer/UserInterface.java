public class UserInterface implements Observer {
    
    private float temperature = 0;
	private float windSpeed = 0;
	private float pressure = 0;
	private Subject weatherStation;
	
	public UserInterface(Subject WeatherStation) {
		this.weatherStation = WeatherStation;
		weatherStation.registerObserver(this);
	}
	
	public void update(float temperature,float windSpeed,float pressure) {
		this.temperature= temperature;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		display();
	}
	
	public void display() {
		System.out.println("User Interface display: Value: " + temperature + windSpeed + pressure);
	}
}

