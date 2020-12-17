
public abstract class PhoneCameraApp {
	private ShareMethod  shareMethod;
	
	public PhoneCameraApp() {
	}

	public void take() {
		System.out.println("I'm TAKING a picture");
	}

	abstract void edit();

	public void save() {
		System.out.println("I'm SAVING a picture");
	}

	public void setShareMethod( ShareMethod sm){
		shareMethod = sm;
	}
	public void share() {
		shareMethod.share();
	}


}
