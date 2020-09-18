import { Component, ElementRef, ViewChild } from '@angular/core';
import { Restaurante } from './models/Restaurante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guia-restaurantes';
  restaurantes: Restaurante[] = [];
  @ViewChild('nombre') nombre: ElementRef;
  @ViewChild('ciudad') ciudad: ElementRef;

  constructor() {}

  agregar(nombre: string, ciudad: string) {

    if (nombre === '' || ciudad === '') {
      console.log('Debe ingresar los datos del restaurante');
    } else {
      
      const restaurante: Restaurante = {
        nombre,
        ciudad
      };

      const existeRestaurante = this.restaurantes.find(x => x.nombre === nombre && x.ciudad === ciudad);

      if (existeRestaurante) {
        console.log(`El restaurante ${nombre} del distrito ${ciudad} ya está registrado`);
      } else {
        this.restaurantes.push(restaurante);
        console.log(`Se agregó el restaurante ${nombre} del distrito ${ciudad}`);
        this.nombre.nativeElement.value = '';
        this.ciudad.nativeElement.value = '';
      }
    }
  }

}
