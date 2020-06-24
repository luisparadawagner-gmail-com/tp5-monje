import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPersonaComponent } from './componentes/crear-persona/crear-persona.component';
import { ConsultarPersonasComponent } from './componentes/consultar-personas/consultar-personas.component';

const routes: Routes = [
  {path: 'crear-persona-component', component: CrearPersonaComponent},
  {path: 'consultar-persona-component', component: ConsultarPersonasComponent},
  { path: '', redirectTo: 'consultar-persona-component', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
