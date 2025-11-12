package carreraPremiun;
import java.util.Random;
import java.util.concurrent.Semaphore;

public class Animal implements Runnable {
	public static Random ra = new Random();
	public Semaphore semaphore;
	public String nombre;
	public int posicion = 0;
	public static int puesto = 1;
	public int velocidad = 1;
	
	public Animal (String nombre, Semaphore semaphore) {
		this.nombre = nombre;
		this.semaphore = semaphore;
	}
	
	public void run() {
		while (posicion < 50) {
			if (posicion >= 5 && posicion < 15) {
				try {
					semaphore.acquire();
					correr();
				} catch (InterruptedException e) {
					e.printStackTrace();
				} finally {
					semaphore.release();

				}
			
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		System.out.println("\033[30m" + nombre + " ha terminado y ha quedado " + puesto + "\033[30m");
		puesto++;
		}
		
	}
	
	
	public void correr () {
		avanzar(velocidad);
	}
	public void avanzar (int velocidad) {
		this.posicion = posicion + velocidad;
		if (posicion < 0) {
			this.posicion = 0;
		} else if (posicion > 50) {
			this.posicion = 50;
		}
		System.out.println("\033[30m" + nombre + " está en la posicion " + posicion + "\033[30m");
	}
	
	public String getPosicion () {
		return (nombre + ":" + posicion);
	}

}
