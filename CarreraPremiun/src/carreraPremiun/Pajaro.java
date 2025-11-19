package carreraPremiun;

import java.util.Random;
import java.util.concurrent.Semaphore;

public class Pajaro extends Animal {
	public Random ra = new Random();
	boolean volando;
	boolean direccion;
	int velocidad_caminando = 3;
	int velocidad_volando = 10;
	int velocidad_volando_atras = -10;
	int charcoPisado = 0;

	Pajaro(String nombre, Circuito circuito, Viento viento) {
		super(nombre, circuito, viento);
	}

	public void correr() {
		
		if (charcoPisado == 0) {

		this.volando = ra.nextBoolean();
		if (volando) {
			direccion = ra.nextBoolean();
			if (direccion) {
				System.out.println("\033[31m*" + nombre + " está volando hacia delante\033[0m");
				if (viento.viento) {
					if (viento.viento_direccion) {
						super.avanzar(velocidad_volando + 5);
					} else {
						super.avanzar(velocidad_volando - 5);
					}
				} else {
					super.avanzar(velocidad_volando);
				}

			} else {
				System.out.println("\033[31m*" + nombre + " está volando hacia atrás\033[0m");
				if (viento.viento) {
					if (viento.viento_direccion) {
						super.avanzar(velocidad_volando_atras - 5);
					} else {
						super.avanzar(velocidad_volando_atras + 5);
					}
				} else {
					super.avanzar(velocidad_volando_atras);
				}
				
			}
		} else {
			System.out.println("\033[31m*" + nombre + " está caminando\033[0m");
			super.avanzar(velocidad_caminando);
			if (posicion % 10 == 0 && posicion != 0 && posicion != circuito.recorrido) {
				System.out.println("\033[35m" + nombre + " ha pisado un charco y se ha resbalado");
				charcoPisado++;
			}
		}
		} else {
			charcoPisado++;
			System.out.println("\033[34m" + nombre + " Se está recuperando del resbalón");
			if (charcoPisado == 5) {
				charcoPisado = 0;
			}
		}
	}

}
