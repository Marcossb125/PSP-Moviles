package carrera;

public class Main {
	public static void main(String[] args) throws InterruptedException {

		CarreraTortugas carrera = new CarreraTortugas();
		Tortuga primero = new Tortuga("Antonio", 1, carrera.tunel, carrera);
		Tortuga segundo = new Tortuga("Roberto", 1, carrera.tunel, carrera);
		Tortuga tercero = new Tortuga("Juanjo", 1, carrera.tunel, carrera);

		Thread hilo1 = new Thread(primero);
		Thread hilo2 = new Thread(segundo);
		Thread hilo3 = new Thread(tercero);

		hilo1.start();
		hilo2.start();
		hilo3.start();

		hilo1.join();
		hilo2.join();
		hilo3.join();
	}
}
