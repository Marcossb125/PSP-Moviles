package animal;

public class Gato extends Animal {
	
	public String bigotes;
	
	public Gato (int bigotes, String nombre, int edad) {
		super(nombre, edad);
		this.bigotes = bigotes + "mm";
	}
	
	public void maullar() {
		System.out.println("miau miau");
	}
	
	public void mostrarDatos () {
		System.out.println(nombre + "," + edad + "," + bigotes);	}
}
