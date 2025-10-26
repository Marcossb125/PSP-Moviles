package cajaRegistradoraSinSync;

import java.util.Random;

public class Empleado extends Thread {
	Random ra = new Random ();
	Caja caja;
	private String nombre;
	
	public Empleado(Caja c, String nombre) {
		this.caja = c;
		this.nombre = nombre;
	}
	
	public void run () {
		for(int k = 0; k < 5; k++) {
			double cantidad = Math.round(ra.nextDouble(5, 100) * 10.0)/10.0;
			caja.cobrar(cantidad);
			System.out.println(this.nombre + " ha cobrado " + cantidad);
			try {
				Thread.sleep(5000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
		}
	}
}
