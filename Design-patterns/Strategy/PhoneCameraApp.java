
public abstract class PhoneCameraApp {
	
	public PhoneCameraApp() {
	}

	public void take() {
		System.out.println("I'm TAKING a picture");
	}

	abstract void edit();

	public void save() {
		System.out.println("I'm SAVING a picture");
	}

	public void share(ShareMethod sm) {
		sm.share();
	}
}
