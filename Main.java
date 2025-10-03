package animal;
import java.util.Scanner;
import java.util.ArrayList;

public class Main {
	public static Scanner sc = new Scanner (System.in);
	
	
	public static void main (String [] args) {
		 ArrayList<Animal> animales = new ArrayList<>();
		
		int d = 3;
		
		while (d != 0) {
			System.out.println("MENÚ");
			System.out.println("1: Añadir animal");
			System.out.println("2: Mostrar datos de todos los animales");
			System.out.println("0: Salir");
			
			d = sc.nextInt();
			
			if (d == 1) {
				System.out.println("Como se llama?");
				String nombre = sc.next();
				
				System.out.println("Cuantos años tiene?");
				int edad = sc.nextInt();
				
				System.out.println("Es un gato o un perro?");
					
				String especie = sc.next();
					
				if (especie.toUpperCase().equals("PERRO")) {
					System.out.println("Que raza es?");
					String raza = sc.next();
					Perro perro = new Perro (raza, nombre, edad);
					animales.add(perro);
						
					} else if (especie.toUpperCase().equals("GATO")) {
						System.out.println("Cuanto le miden los bigotitos al michi? (en mm, solo el numero)");
						int bigotitos = sc.nextInt();
						Gato gato = new Gato (bigotitos, nombre, edad);
						animales.add(gato);
						
					}
				
			} else if (d == 2) {
				for (int k = 0; k <= animales.size()-1; k++) {
					Animal animal = animales.get(k);
					animal.mostrarDatos();
				}
			}
		}
		
	}

}
