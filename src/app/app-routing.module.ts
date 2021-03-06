import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LogInComponent } from './Components/log-in/log-in.component';
import { GrupoComponent } from './Components/grupo-component/grupo.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

const routes: Routes = [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LogInComponent },
      {path: 'grupocomponent', component: GrupoComponent },
      {path: 'login', component: LogInComponent },
      {path: 'Proyectos', component: ProyectosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
