import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorage } from '../services/local-storage';

@Component({
  selector: 'app-clicker',
  imports: [CommonModule],
  templateUrl: './clicker.html',
  styleUrl: './clicker.css'
})
export class Clicker {

  dinero = 0;
  monedasPorClick = 1;
  monedasPorSegundo = 0;

  botonPulsado = false;

  mejorasProduccion = [
    { nombre: 'Yamato', cantidad: 0, produccion: 1, coste: 10 },
    { nombre: 'Force Edge', cantidad: 0, produccion: 5, coste: 50 },
    { nombre: 'Beowulf', cantidad: 0, produccion: 20, coste: 200 },
    { nombre: 'I AM THE STORM THAT IS APROAAAAACHIIIING', cantidad: 0, produccion: 100, coste: 1000 },
    { nombre: 'BURY THE LIGHT DEEP WITHIIIIN', cantidad: 0, produccion: 500, coste: 5000 },
    { nombre: 'Sin Devil Trigger', cantidad: 0, produccion: 2000, coste: 25000 }
  ];

  mejorasClick = [
    { nombre: 'Dante', nivel: 0, aumento: 1, coste: 50 },
    { nombre: 'Nero', nivel: 0, aumento: 5, coste: 200 },
    { nombre: 'V', nivel: 0, aumento: 20, coste: 1000 }
  ];

  constructor(private storage: LocalStorage) {}

  ngOnInit() {
    
    this.cargarProgreso();

    setInterval(() => {
      this.dinero += this.monedasPorSegundo;
      this.guardarProgreso();
    }, 1000);
  }

  sumar() {
    this.dinero += this.monedasPorClick;
    this.botonPulsado = true;
    this.guardarProgreso();

    setTimeout(() => this.botonPulsado = false, 150);
  }

  comprarProduccion(mejora: any) {
    if (this.dinero >= mejora.coste) {
      this.dinero -= mejora.coste;
      mejora.cantidad++;
      this.monedasPorSegundo += mejora.produccion;
      mejora.coste = Math.floor(mejora.coste * 1.3);
      this.guardarProgreso();
    }
  }

  comprarClick(mejora: any) {
    if (this.dinero >= mejora.coste) {
      this.dinero -= mejora.coste;
      mejora.nivel++;
      this.monedasPorClick += mejora.aumento;
      mejora.coste = Math.floor(mejora.coste * 1.5);
      this.guardarProgreso();
    }
  }

  formatear(numero: number): string {
    if (numero >= 1e12) return (numero / 1e12).toFixed(3) + ' billones';
    if (numero >= 1e6) return (numero / 1e6).toFixed(3) + ' millones';
    if (numero >= 1e3) return numero.toLocaleString('es-ES');
    return numero.toString();
  }

  guardarProgreso() {
    const progreso = {
      dinero: this.dinero,
      monedasPorClick: this.monedasPorClick,
      monedasPorSegundo: this.monedasPorSegundo,
      mejorasProduccion: this.mejorasProduccion,
      mejorasClick: this.mejorasClick
    };
    this.storage.setItem('clicker-progreso', JSON.stringify(progreso));
  }

  cargarProgreso() {
    const progreso = this.storage.getItem('clicker-progreso');
    if (progreso) {
      const datos = JSON.parse(progreso);
      this.dinero = datos.dinero || 0;
      this.monedasPorClick = datos.monedasPorClick || 1;
      this.monedasPorSegundo = datos.monedasPorSegundo || 0;
      
      if (datos.mejorasProduccion) {
        this.mejorasProduccion = datos.mejorasProduccion;
      }
      if (datos.mejorasClick) {
        this.mejorasClick = datos.mejorasClick;
      }
    }
  }

  resetearProgreso() {
    this.storage.clear();
    window.location.reload();
  }
}

