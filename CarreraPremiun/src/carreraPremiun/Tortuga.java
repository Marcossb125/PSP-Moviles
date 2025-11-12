package carreraPremiun;

public class Tortuga extends Animal {
	int velocidad = 2;
	
	Tortuga(String nombre) {
		super(nombre);
	}
	
	@Override
	public void correr () {
		avanzar(velocidad);
	}
}
