package animal;

public class Perro extends Animal {

	public String raza;
	
	public Perro(String raza, String nombre, int edad) {
		super(nombre, edad);
		this.raza = raza;
	}
	
	public void ladrar () {
		System.out.println("guau guau");
	}
	
	public void mostrarDatos () {
		System.out.println(nombre + "," + edad + "," + raza);	}
	
}
