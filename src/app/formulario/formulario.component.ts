import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  bebida: string = "";
  bebida2: string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

  gracias():void {
    this.bebida2 = this.bebida.valueOf();
  }
}
