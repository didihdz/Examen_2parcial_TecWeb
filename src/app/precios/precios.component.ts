import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  headers = ["Bebida", "Descripcion", "Precio", "Descuento"];
  uno = ["Cafe Madre",
  "Disfruta el tradicional cafe del dia de las madres pero con nuestro toque y cafe 100% puro",
  "$60",
  "10%"];
  dos = [ "Cafe mocca",
  "Elaborado con la mejor calidad de mocca y toques de menta por toda la bebida",
  "$70",
  "20%"];
  tres = [ "Dragonfruit",
   "Para mama, el mejor jugo de dragonfruit que contiene unos toques de citricos y chocolate",
   "$65",
   "15%"];
  cuatro = [ "Frappuccino de Naranja",
   "Como buena primavera, una bebida fria saber naranja es lo mejor! acompañada por tropecitos de otros citricos",
   "$70",
   "10%"];
  cinco = [ "Helado de avellana",
   "Disfruta de nuestro helado mas vendido, avellana por todos lados mas chispas de chocolante-menta!",
   "$50",
   "10%"];

  
 /* producto : Array<String> = ["Cafe Madre","Cafe mocca","Dragonfruit","Frappuccino de Naranja","Helado de avellana"];
  DescProducto : Array<String> = ["Disfruta el tradicional cafe del dia de las madres pero con nuestro toque y cafe 100% puro",
  "Elaborado con la mejor calidad de mocca y toques de menta por toda la bebida",
  "Para mama, el mejor jugo de dragonfruit que contiene unos toques de citricos y chocolate",
  "Como buena primavera, una bebida fria saber naranja es lo mejor! acompañada por tropecitos de otros citricos",
  "Disfruta de nuestro helado mas vendido, avellana por todos lados mas chispas de chocolante-menta!"];
  costo : Array<string> = ["60", "70", "65", "70", "50" ];
  descuento : Array<string> = ["10","20","15","10","10"]; */


  constructor() { }

  ngOnInit(): void {
  }

}
