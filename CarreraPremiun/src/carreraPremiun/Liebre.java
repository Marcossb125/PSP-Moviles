package carreraPremiun;

import java.util.concurrent.Semaphore;

public class Liebre extends Animal {
	int ronda = 0;
	int velocidad = 5;
	int charcoPisado = 0;

	Liebre(String nombre, Circuito circuito, Viento viento) {
		super(nombre, circuito, viento);
	}

	public void correr() {

		if (charcoPisado == 0) {
			if (ronda >= 4) {

				if (ronda == 14 || viento.viento) {
					ronda = 0;
					System.out.println("\033[36m" + nombre + " Ha despertado");
				} else {
					System.out.println("\033[36m" + nombre + " está descansando\033[36m");
				}
			} else {
				super.avanzar(velocidad);
				if (posicion % 10 == 0 && posicion != 0) {
					charcoPisado++;
					System.out.println("\033[35m" + nombre + " ha pisado un charco y se ha resbalado");
				}
			}
			ronda++;
		} else {
			charcoPisado++;
			System.out.println("\033[34m" + nombre + " Se está recuperando del resbalón");
			if (charcoPisado == 5) {
				charcoPisado = 0;
			}
		}
	}

}
