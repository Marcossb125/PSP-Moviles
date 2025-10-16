package hilos;

public class Alumno implements Runnable {
	
	String nombre;
	
	public Alumno(String nombre) {
		this.nombre = nombre;
	}

	@Override
	public void run () {
		if (nombre.toUpperCase().equals("PEPITO")) {
			System.out.println("Mira que ser yo Pepito... pues me cierro");
		} else {
			for (int k = 0; k <= 5; k++) {
				System.out.println("Hola, soy " + nombre + " y este es mi mensaje numero: " + k);
				try {
					Thread.sleep(500);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		}
		

}
