
public class SimpleZoneFactory {

	public Zone CreateZone(String zoneid) {
		Zone zone = null;

		if (zoneid.equals("Eastern")) {
			zone = new ZoneUSEastern();
		} else if (zoneid.equals("Central")) {
			zone = new ZoneUSCentral();
		} else if (zoneid.equals("Mountain")) {
			zone = new ZoneUSMountain();
		} else if (zoneid.equals("Pacific")) {
			zone = new ZoneUSPacific();
		}
		return zone;
	}
}
