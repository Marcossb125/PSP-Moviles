package cajaRegistradora;
public class Caja {
	private double total = 0;
	
	public synchronized void cobrar (double cantidad) {
		this.total = this.total + cantidad;
		this.total = Math.round(this.total * 10.0)/10.0;
	}
	
	public double getTotal () {
		return total;
	}
}
