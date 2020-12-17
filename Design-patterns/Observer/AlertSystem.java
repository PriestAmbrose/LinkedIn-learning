public class AlertSystem implements Observer {
    private float temperature = 0;
	private float windSpeed = 0;
	private float pressure = 0;
	private Subject weatherStation;
	
	public AlertSystem(Subject weatherStation) {
		this.weatherStation = weatherStation;
		weatherStation.registerObserver(this);
	}
	
	public void update(float temperature,float windSpeed,float pressure) {
		this.temperature= temperature;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		alert();
	}
	
	public void alert() {
		System.out.println("Alert System if anything alert " + temperature + windSpeed + pressure);
	}
}
