package cajaRegistradoraSinSync;

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
		/* Aqui el metodo cobrar no está sincronizado, por lo que lo que los hilos se amontonan en ese metodo generando fallos en la suma
		 por ejemplo: hilo1 está ya ha hecho la suma pero antes de actualizar la variable total hilo 2 hace otra suma a partir del total sin actualizar
		 , lo que provoca un resultado final erróneo */
	}
	
}
