

public class Simulator {
 
	public static void main(String[] args) {
 
		BasicCameraApp basic = new BasicCameraApp();
		
		basic.take();
		basic.save();
		basic.edit();
		basic.setShareMethod(new ShareWithText());
		PhoneCameraApp	 plus = new CameraPlusApp();
		plus.setShareMethod(new ShareByEmail());
		basic.share();

	
 
		
		plus.take();
		plus.save();
		plus.edit();
		
		plus.share();

		basic.setShareMethod(new ShareViaMedia());
		basic.share();
		
	}
}
