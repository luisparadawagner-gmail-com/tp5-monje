import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComponentConsultarService } from 'src/app/servicio/component-consultar.service';
import { Persona } from 'src/app/clase/Persona';
import { MatTable } from '@angular/material/table';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-consultar-personas',
  templateUrl: './consultar-personas.component.html',
  styleUrls: ['./consultar-personas.component.css']
})
export class ConsultarPersonasComponent implements OnInit {

 //@ViewChild(MatTable, {static: false}) private table: MatTable<Persona>;

  displayedColumns: string[] = ['nombre', 'apellido', 'edad', 'direccion', 'editar'];
  dataSource: any[] = [];

  constructor(
    private router: Router, 
    private componentConsultarService: ComponentConsultarService, 
    private rutaA: ActivatedRoute
    ) {}

  personaNueva: any;
  persona: Persona;
 
  ngOnInit() {
    debugger;
    this.getPersonas();
    //this.agregarFila();
  }


  getPersonas(){
    this.componentConsultarService.getPersona().subscribe((personas) => {
      debugger;
      this.dataSource = personas;
      this.agregarFila()

  
    });
  }

  agregarFila(){
    debugger;
    this.personaNueva = this.rutaA.snapshot.params;
    this.dataSource.push(this.personaNueva)

  }

  

  editar(element){
    debugger;
    this.router.navigate(['/crear-persona-component', element])
  }

}
