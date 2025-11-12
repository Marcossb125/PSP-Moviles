package carreraPremiun;
import java.util.concurrent.Semaphore;
public class Liebre extends Animal{
	int ronda = 0;
	int velocidad = 5;
	Liebre (String nombre, Semaphore semaphore) {
		super(nombre, semaphore);
	}
	
	public void correr() {
		if (posicion >= 5) {
			try {
				semaphore.acquire();
		if (ronda >= 4) {
			System.out.println("\033[36m" + nombre + " está descansando\033[36m");
			
			if (ronda == 14) {
				ronda = 0;
			}
		} else {
			super.avanzar(velocidad);
		}
		ronda++;
	} catch (InterruptedException e) {
		e.printStackTrace();
	} finally {
		semaphore.release();
	} else {
		if (ronda >= 4) {
			System.out.println("\033[36m" + nombre + " está descansando\033[36m");
			
			if (ronda == 14) {
				ronda = 0;
			}
		} else {
			super.avanzar(velocidad);
		}
		ronda++;
	}
		
	}
}
}
