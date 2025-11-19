package carreraPremiun;

import java.util.Random;

public class Animal implements Runnable {
	public static Random ra = new Random();
	public int v;
	public Circuito circuito;
	public String nombre;
	public int posicion = 0;
	public static int puesto = 0;
	public int velocidad = 1;
	public boolean está_en_el_tunel = false;
	public boolean tunel_pasado = false;
	
	public Viento viento;

	public Animal(String nombre, Circuito circuito, Viento viento) {
		this.nombre = nombre;
		this.circuito = circuito;
		this.viento = viento;
	}

	public void run() {
		while (posicion < circuito.recorrido) {
			if (v == 1) {
				viento.activarViento();
			}
			if (posicion < circuito.final_tunel && posicion >= circuito.inicio_tunel) {

				try {
					circuito.tunelOcupadoCambio();
					circuito.tunel.acquire();
					while (posicion < circuito.final_tunel && posicion >= circuito.inicio_tunel) {
						if (!está_en_el_tunel) {
							System.out.println("\033[38m" + nombre + " Acaba de entrar al tunel");
							está_en_el_tunel = true;
						}
						correr();

						try {
							Thread.sleep(1000);
						} catch (InterruptedException e) {
							e.printStackTrace();
						}
					}
				} catch (InterruptedException e) {
					e.printStackTrace();
				} finally {
					circuito.tunel.release();
					circuito.tunelOcupadoCambio();
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
		puesto++;
		System.out.println("\033[30m" + nombre + " ha terminado y ha quedado " + puesto + "\033[30m");
		
		if (puesto >= circuito.concursantes) {
			viento.finalizar();
		}

	}

	public void correr() {
		avanzar(velocidad);
	}

	public void avanzar(int velocidad) {
		this.posicion = posicion + velocidad;
		if (posicion < 0) {
			this.posicion = 0;
		} else if (posicion > circuito.recorrido) {
			this.posicion = circuito.recorrido;
		}
		System.out.println("\033[30m" + nombre + " está en la posicion " + posicion + "\033[30m");
		
	}

	public String getPosicion() {
		return (nombre + ":" + posicion);
	}

}
