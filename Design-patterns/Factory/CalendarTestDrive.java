

public class CalendarTestDrive {
 
	public static void main(String[] args) {
		SimpleZoneFactory factory = new SimpleZoneFactory();

		Zone zone1 = factory.CreateZone("Pacific");
		System.out.println("We created a " + zone1.getDisplayName() + "\n");
		System.out.println(zone1.getOffset());

		Zone zone2 = factory.CreateZone("Eastern");
		System.out.println("We created a " + zone2.getDisplayName() + "\n");
		System.out.println(zone2.getOffset());

		Zone zone3 = factory.CreateZone("Central");
		System.out.println("We created a " + zone3.getDisplayName() + "\n");
		System.out.println(zone3.getOffset());

		Zone zone4 = factory.CreateZone("Mountain");
		System.out.println("We created a " + zone4.getDisplayName() + "\n");
		System.out.println(zone4.getOffset());

		Calendar pacificCalendar = new PacificCalendar(zone1);
		pacificCalendar.createCalendar();
	}
}
