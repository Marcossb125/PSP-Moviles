package carreraPremiun;
import java.util.Random;
public class Viento implements Runnable {
	Random ra = new Random ();
	public boolean viento = false;
	public boolean viento_direccion;
	
	public void run() {
		while (true) {
		viento = ra.nextBoolean();
		viento_direccion = ra.nextBoolean();
		
		try {
			wait();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	}
	
	public void activarViento () {
		notify();
	}
}
