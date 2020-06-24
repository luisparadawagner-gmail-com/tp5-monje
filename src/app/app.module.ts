import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import { CrearPersonaComponent } from './componentes/crear-persona/crear-persona.component';
import { ConsultarPersonasComponent } from './componentes/consultar-personas/consultar-personas.component';
import { ComponentConsultarService } from './servicio/component-consultar.service';

@NgModule({
  declarations: [
    AppComponent,
    CrearPersonaComponent,
    ConsultarPersonasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
		MatInputModule,
		MatButtonModule,
    BrowserAnimationsModule,
		MatCardModule,
		MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule
  ],
    
  providers: [ComponentConsultarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
