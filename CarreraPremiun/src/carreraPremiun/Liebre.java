package carreraPremiun;
import java.util.concurrent.Semaphore;
public class Liebre extends Animal{
	int ronda = 0;
	int velocidad = 5;
	Liebre (String nombre, Circuito circuito, Viento viento) {
		super(nombre, circuito, viento);
	}
	
	public void correr() {
		
		if (ronda >= 4) {
			System.out.println("\033[36m" + nombre + " está descansando\033[36m");
			
			if (ronda == 14 || viento.viento) {
				ronda = 0;
			}
		} else {
			super.avanzar(velocidad);
		}
		ronda++;
	}
		
	
}

