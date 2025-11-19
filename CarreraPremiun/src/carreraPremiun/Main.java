package carreraPremiun;

import java.util.concurrent.Semaphore;

public class Main {

	public static void main(String[] args) {
		Circuito circuito = new Circuito(200, 50, 150, 3);
		Viento viento = new Viento();

		Animal pajaro = new Pajaro("Manjon", circuito, viento);
		Animal tortuga = new Tortuga("Hugo", circuito, viento);
		Animal liebre = new Liebre("Adrian", circuito, viento);

		Thread hilo1 = new Thread(pajaro);
		Thread hilo2 = new Thread(tortuga);
		Thread hilo3 = new Thread(liebre);

		Thread v = new Thread(viento);

		hilo1.start();
		hilo2.start();
		hilo3.start();
		v.start();

		try {
			hilo1.join();
			hilo2.join();
			hilo3.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	}

}
