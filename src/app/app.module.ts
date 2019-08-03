import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponent } from './Components/consulta-component/consulta.component';
import { ProfesorComponent } from './Components/profesor-component/profesor.component';
import { ArchivoComponent } from './Components/archivo-component/archivo.component';
import { GrupoComponent } from './Components/grupo-component/grupo.component';
import { AlumnoComponent } from './Components/alumno-component/alumno.component';
import { RespuestaConsultaComponent } from './Components/respuesta-consulta/respuesta-consulta.component';
import { NavbarComponent } from './Components/navbar-component/navbar.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { FooterComponent } from './Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    ProfesorComponent,
    ArchivoComponent,
    GrupoComponent,
    AlumnoComponent,
    RespuestaConsultaComponent,
    NavbarComponent,
    LogInComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
