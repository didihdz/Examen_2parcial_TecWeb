import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Examen2Parcial';

  texto1: string = "¡ CONOCE NUESTROS NUEVOS PRODUCTOS DE PRIMAVERA !";
  texto2: string = "¡Por una buena causa!";
  texto3: string = "¡ Conoce las promocions en el Dia de las Madres !"
  numeroEco : number = 0;
  numeroEco2 :number = 0;
  fecha = new Date();
  
  calcular():void {
    this.numeroEco = this.numeroEco2;
  }
}
