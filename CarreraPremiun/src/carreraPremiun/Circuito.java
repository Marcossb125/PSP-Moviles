package carreraPremiun;
import java.util.concurrent.Semaphore;
public class Circuito {
	public int recorrido;
	public Semaphore tunel = new Semaphore (1);
	public int puesto = 0;
	public int inicio_tunel;
	public int final_tunel;
	public boolean tunel_ocupado = false;
	
	Circuito(int recorrido, int inicio_tunel, int final_tunel) {
		this.recorrido = recorrido;
		this.inicio_tunel = inicio_tunel;
		this.final_tunel = final_tunel;
	}
	public void tunelOcupadoCambio () {
		tunel_ocupado = !tunel_ocupado;
	}
	
	public synchronized int llegadaMeta() {
		puesto++;
		return puesto;
	}
	
}
