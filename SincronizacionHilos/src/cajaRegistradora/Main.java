package cajaRegistradora;

public class Main {
	public static void main (String [] args) throws InterruptedException {
		Caja caja = new Caja();
	
		Empleado juanjo = new Empleado (caja, "Juanjo");
		Empleado pepa = new Empleado (caja, "Pepa");
		Empleado kratos = new Empleado (caja, "Kratos");
	
		juanjo.start();
		pepa.start();
		kratos.start();
		
		juanjo.join();
		pepa.join();
		kratos.join();
		
		System.out.println("Total en caja: " + caja.getTotal());
		
		/* Aqui el metodo cobrar de la clase caja si está sincronizado, por lo que los hilos van entrando por turnos en el metodo y no se
		 producen los fallos que si ocurririan si el metodo no estuviera sincronizado*/
	}
	
}
