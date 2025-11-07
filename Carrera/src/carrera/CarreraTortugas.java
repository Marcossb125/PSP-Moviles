package carrera;

import java.util.concurrent.Semaphore;

public class CarreraTortugas {
	public int recorrido = 20;
	public Semaphore tunel = new Semaphore(1);
	public int puesto = 0;

	public synchronized int llegadaMeta() {
		puesto++;
		return puesto;
	}
}
