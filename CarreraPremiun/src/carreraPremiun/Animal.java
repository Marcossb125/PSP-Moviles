package carreraPremiun;

import java.util.Random;

public class Animal implements Runnable {
	public static Random ra = new Random();
	public Circuito circuito;
	public String nombre;
	public int posicion = 0;
	public static int puesto = 1;
	public int velocidad = 1;
	public boolean está_en_el_tunel = false;

	public Animal(String nombre, Circuito circuito) {
		this.nombre = nombre;
		this.circuito = circuito;
	}

	public void run() {
		while (posicion < 50) {
			if (circuito.tunel_ocupado && posicion > 5 && posicion < 25 && !está_en_el_tunel) {
				posicion = 5;
				System.out.println("\033[30m" + nombre + " está en la posicion " + posicion + "\033[30m");
			}
			if (posicion >= 5 && posicion < 25) {
				
					try {
						circuito.tunelOcupadoCambio();
						circuito.tunel.acquire();
						while (posicion < 25 && posicion >= 5) {
						if (!está_en_el_tunel) {
								System.out.println("\033[38m" + nombre + " Acaba de entrar al tunel");
								está_en_el_tunel = true;
						}
						correr();
					

					try {
						Thread.sleep(1000);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
				}
					} catch (InterruptedException e) {
						e.printStackTrace();
					} finally {
						circuito.tunel.release();
					}
				
				} else {
					if (está_en_el_tunel) {
						System.out.println("\033[38m" + nombre + " Acaba de salir del tunel");
						está_en_el_tunel = false;
						circuito.tunelOcupadoCambio();
					}
				correr();
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		
		}
		System.out.println("\033[30m" + nombre + " ha terminado y ha quedado " + puesto + "\033[30m");
		puesto++;

	}

	public void correr() {
		avanzar(velocidad);
	}

	public void avanzar(int velocidad) {
		this.posicion = posicion + velocidad;
		if (posicion < 0) {
			this.posicion = 0;
		} else if (posicion > 50) {
			this.posicion = 50;
		}
		
		System.out.println("\033[30m" + nombre + " está en la posicion " + posicion + "\033[30m");
	}

	public String getPosicion() {
		return (nombre + ":" + posicion);
	}

}
