package contador;

public class Main  {
	
	public static void main (String [] args) throws InterruptedException {
	
	Contador contador = new Contador();
	
	HiloContador hilo1 = new HiloContador(contador);
	HiloContador hilo2 = new HiloContador(contador);
	
	hilo1.start();
	hilo2.start();
	
	hilo1.join();
	hilo2.join();
	
	System.out.println(contador.getContador());
	}
}
