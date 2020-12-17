public class Logger implements Observer {
    private float temperature = 0;
	private float windSpeed = 0;
	private float pressure = 0;
	private Subject weatherStation;
	
	public Logger(Subject weatherStation) {
		this.weatherStation = weatherStation;
		weatherStation.registerObserver(this);
	}
	
	public void update(float temperature,float windSpeed,float pressure) {
		this.temperature= temperature;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		log();
	}
	
	public void log() {
		System.out.println("Logger logs: Value: " + temperature + windSpeed + pressure);
	}
}
