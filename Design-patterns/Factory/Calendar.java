
abstract public class Calendar {
	Zone zone;
	abstract public void createCalendar();
	public void print(){
		System.out.println("the calendar of events in zone" + zone.getDisplayName() + "\n");
		System.out.println("the offset of zone is: "+ zone.getOffset());
	}

}
