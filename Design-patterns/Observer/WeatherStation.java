

import java.util.*;

public class WeatherStation implements Subject {
	private ArrayList<Observer> observers;
	private float temperature = 0;
	private float windSpeed = 0;
	private float pressure = 0;
	
	public WeatherStation() {
		observers = new ArrayList<Observer>();
	}
	
	public void registerObserver(Observer o) {
		observers.add(o);
	}
	
	public void removeObserver(Observer o) {
		int i = observers.indexOf(o);
		if (i >= 0) {
			observers.remove(i);
		}
	}
	
	public void notifyObservers() {
		for (Observer observer : observers) {
			observer.update(temperature,windSpeed,pressure);
		}
	}
	
	public void setValue(float temperature,float windSpeed,float pressure) {
		this.temperature= temperature;
		this.windSpeed = windSpeed;
		this.pressure = pressure;
		notifyObservers();
	}
}