import { Component } from '@angular/core';
import { Servicios } from './cservicios/cservicios.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  servicioss: Servicios[];
  constructor() {
    this.servicioss = [
      new Servicios('Gean Carlo Vitorino', 'Consultaria financiera', 5, 15),
      new Servicios('Mariana Flores', 'Imagen Corporativa', 12, 20)
    ];
    console.log(this.servicioss);
  }


  AgregarServicio(nombre: HTMLInputElement, servicio: HTMLInputElement, Kgcroquetas: HTMLInputElement, maxhr: HTMLInputElement ) {
    this.servicioss.push( new Servicios (servicio.value, nombre.value, Number(Kgcroquetas.value), Number(maxhr.value)));
    nombre.value = '';
    servicio.value = '';
    Kgcroquetas.value = '';
    maxhr.value = '';
    return false;
  }

}
