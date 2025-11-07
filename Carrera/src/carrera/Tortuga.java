package carrera;

import java.util.concurrent.Semaphore;

public class Tortuga implements Runnable {
	public Semaphore semaphore;
	public int velocidad;
	public String nombre;
	public CarreraTortugas carrera;

	public int posicion = 0;

	public Tortuga(String nombre, int velocidad, Semaphore semaphore, CarreraTortugas carrera) {
		this.velocidad = velocidad;
		this.nombre = nombre;
		this.semaphore = semaphore;
		this.carrera = carrera;
	}

	public void run() {
		while (posicion < carrera.recorrido) {

			if (posicion == 5) {
				try {
					semaphore.acquire();
				for (int k = 0; k <= 10; k++) {
					if (posicion == 6) {
						System.out.println(nombre + " Ha entrado en el tunel");
						}
				
					this.posicion = this.posicion + this.velocidad;
					System.out.println(nombre + ": " + posicion);
				

				}
				System.out.println(nombre + " Ha salido del tunel");
				} catch (InterruptedException e) {
					e.printStackTrace();
				} finally {
					semaphore.release();
				}
				
			} else {
				this.posicion = this.posicion + this.velocidad;
				System.out.println(nombre + ": " + posicion);
			}

		}
		System.out.println(nombre + " Ha terminado la carrera y ha quedado " + carrera.llegadaMeta() + "º");
	}

}
