package carreraPremiun;
import java.util.Random;
import java.util.Random;
public class Viento implements Runnable {
	Random ra = new Random ();
	public boolean viento = false;
	public boolean viento_direccion;
	public boolean terminar = false;
	public int tiempo_espera;
	
	public synchronized void run() {
		while (!terminar) {
			
			tiempo_espera = ra.nextInt(3000, 10000);
		viento = ra.nextBoolean();
		viento_direccion = ra.nextBoolean();
		if (viento) {
			if (viento_direccion) {
				System.out.println("\033[32mSopla el viento afín\033[32m");
			} else {
				System.out.println("\033[32mSopla el viento en contra\033[32m");
			}
			
		} else {
			System.out.println("\033[32mNo sopla el viento\033[32m");
		}
		try {
			wait(tiempo_espera);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		}
	}
	public void finalizar () {
		terminar = true;
	}
}
