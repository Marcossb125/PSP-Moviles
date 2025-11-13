package carreraPremiun;
import java.util.concurrent.Semaphore;

public class Main {
	
	
	public static void main(String[] args) {
		Circuito circuito = new Circuito (200, 50, 150);
		
		Animal pajaro = new Pajaro ("Manjon", circuito);
		Animal tortuga = new Tortuga ("Hugo", circuito);
		Animal liebre = new Liebre ("Adrian", circuito);
		
		Thread hilo1 = new Thread (pajaro);
		Thread hilo2 = new Thread (tortuga);
		Thread hilo3 = new Thread (liebre);
		
		hilo1.start();
		hilo2.start();
		hilo3.start();
		
		try {
			hilo1.join();
			hilo2.join();
			//hilo3.join();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
			
		
	}
	
}


