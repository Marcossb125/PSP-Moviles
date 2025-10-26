package contador;

public class Contador {
	private int contador = 0;
	
	
	public synchronized void incrementar() {
		this.contador++;
	}


	public int getContador() {
		return contador;
	}
}
