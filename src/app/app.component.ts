import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {



  AgregarServicio(nombre: HTMLInputElement, servicio: HTMLInputElement, Kgcroquetas: HTMLInputElement, maxhr: HTMLInputElement ) {
    console.log(nombre.value, servicio.value, Kgcroquetas.value, maxhr.value );
    return false;
  }

}
