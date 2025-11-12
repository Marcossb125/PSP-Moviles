package carreraPremiun;
import java.util.Random;
import java.util.concurrent.Semaphore;
public class Pajaro extends Animal {
	public Random ra = new Random ();
	boolean volando;
	boolean direccion;
	int velocidad_caminando = 3;
	int velocidad_volando = 10;
	int velocidad_volando_atras = -10;
	
	Pajaro(String nombre, Semaphore semaphore) {
		super(nombre, semaphore);
	}

	
	public void correr () {
		
		if (posicion >= 5) {
			while (posicion < 15) {
			try {
				semaphore.acquire();
				correr();
		this.volando = ra.nextBoolean();
		if (volando) {
			direccion = ra.nextBoolean();
			if (direccion) {
				System.out.println ("\033[31m*" + nombre + " está volando hacia delante\033[0m");
				super.avanzar(velocidad_volando);
			} else {
				System.out.println("\033[31m*" + nombre + " está volando hacia atrás\033[0m");
				super.avanzar(velocidad_volando_atras);
			}
		} else {
			System.out.println("\033[31m*" + nombre + " está caminando\033[0m");
			super.avanzar(velocidad_caminando);
		}
			
			} catch (InterruptedException e) {
				e.printStackTrace();
			} finally {
				semaphore.release();
	
	
		}
			}
	} else {
		correr();
		this.volando = ra.nextBoolean();
		if (volando) {
			direccion = ra.nextBoolean();
			if (direccion) {
				System.out.println ("\033[31m*" + nombre + " está volando hacia delante\033[0m");
				super.avanzar(velocidad_volando);
			} else {
				System.out.println("\033[31m*" + nombre + " está volando hacia atrás\033[0m");
				super.avanzar(velocidad_volando_atras);
			}
		} else {
			System.out.println("\033[31m*" + nombre + " está caminando\033[0m");
			super.avanzar(velocidad_caminando);
		}
	}
	}
}
