package carreraPremiun;
import java.util.concurrent.Semaphore;
import java.util.Random;
public class Circuito {
	Random ra = new Random ();
	
	public int recorrido;
	public Semaphore tunel = new Semaphore (1);
	public int puesto = 0;
	public int inicio_tunel;
	public int final_tunel;
	public boolean tunel_ocupado = false;
	public boolean viento;
	public boolean viento_direccion;
	public int concursantes;
	
	Circuito(int recorrido, int inicio_tunel, int final_tunel, int concursantes) {
		this.recorrido = recorrido;
		this.inicio_tunel = inicio_tunel;
		this.final_tunel = final_tunel;
		this.concursantes = concursantes;
	}
	public void tunelOcupadoCambio () {
		tunel_ocupado = !tunel_ocupado;
	}
	
	public synchronized int llegadaMeta() {
		puesto++;
		return puesto;
	}
	
	public void run() throws InterruptedException {
		viento = ra.nextBoolean();
		viento_direccion = ra.nextBoolean();
		wait();
	}
	
	public void activarViento () {
		notify();
	}
}
