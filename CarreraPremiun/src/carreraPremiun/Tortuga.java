package carreraPremiun;
import java.util.concurrent.Semaphore;
public class Tortuga extends Animal {
	int velocidad = 2;
	
	Tortuga(String nombre, Circuito circuito) {
		super(nombre, circuito);
	}
	
	@Override
	public void correr () {
		
			avanzar(velocidad);
		}
	
}

