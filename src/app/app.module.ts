import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductoUnoComponent } from './producto-uno/producto-uno.component';
import { ProductoDosComponent } from './producto-dos/producto-dos.component';
import { ProductoTresComponent } from './producto-tres/producto-tres.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PreciosComponent } from './precios/precios.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductoUnoComponent,
    ProductoDosComponent,
    ProductoTresComponent,
    FormularioComponent,
    PreciosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
