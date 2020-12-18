public class DroneAdapter implements Duck {
    Drone drone;
     
	public DroneAdapter(Drone drone) {
		this.drone = drone;
	}
    
	public void quack() {
		drone.beep();
	}
  
	public void fly() {
        
		for(int i=0; i < 5; i++) {
			drone.spin_rotors();
        }
        drone.take_off();
        for(int i=0; i < 5; i++) {
			drone.spin_rotors();
        }
	}
}
