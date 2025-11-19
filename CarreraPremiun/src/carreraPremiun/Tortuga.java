package carreraPremiun;
import java.util.concurrent.Semaphore;
public class Tortuga extends Animal {
	int velocidad = 2;
	int charcoPisado = 0;
	
	Tortuga(String nombre, Circuito circuito, Viento viento) {
		super(nombre, circuito, viento);
	}
	
	@Override
	public void correr () {
		if (charcoPisado > 0) {
			charcoPisado++;
			avanzar(velocidad+3);
			if (charcoPisado >= 5) {
				charcoPisado = 0;
			}
		} else {
			avanzar(velocidad);
		}
			
		if (posicion % 10 == 0 && posicion != 0) {
			charcoPisado++;
			System.out.println("\033[35m" + nombre + " ha pisado un charco y ha aumentado su velocidad");
		}
			
		}
	
}

