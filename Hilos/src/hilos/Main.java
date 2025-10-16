package hilos;

import java.util.Scanner;

public class Main {
	public static Scanner sc = new Scanner (System.in);

	public static void main (String [] args ) {
		System.out.println("Alumno 1: ");
		String nombre = sc.next();
		Alumno primero = new Alumno(nombre);
		System.out.println("Alumno 2 ");
		nombre = sc.next();
		Alumno segundo = new Alumno(nombre);
		System.out.println("Alumno 3 ");
		nombre = sc.next();
		Alumno tercero = new Alumno(nombre);
		
		Thread hilo1 = new Thread(primero);
		
		Thread hilo2 = new Thread(segundo);
		
		Thread hilo3 = new Thread(tercero);
		
		hilo1.start();
		while (hilo1.isAlive()) {
			
			}
		
		hilo2.start();
		while (hilo2.isAlive()) {
			
		}
		hilo3.start();
		while (hilo3.isAlive()) {
			
			}
		}
}

