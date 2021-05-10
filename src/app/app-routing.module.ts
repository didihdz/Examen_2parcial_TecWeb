import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoUnoComponent} from './producto-uno/producto-uno.component';
import { ProductoDosComponent } from './producto-dos/producto-dos.component';
import { ProductoTresComponent } from './producto-tres/producto-tres.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [ 
  {path: 'producto-uno-component', component: ProductoUnoComponent},
  {path: 'producto-dos-component', component: ProductoDosComponent},
  {path: 'producto-tres-component', component: ProductoTresComponent},
  {path: 'formulario-component', component: FormularioComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
