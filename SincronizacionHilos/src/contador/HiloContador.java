package contador;

public class HiloContador extends Thread{
	Contador contador;
	
	public HiloContador(Contador c) {
		this.contador = c;
	}
	
	public void run () {
		for (int k = 0; k < 1000; k++) {
			contador.incrementar();
		}
	}
	
	

}
