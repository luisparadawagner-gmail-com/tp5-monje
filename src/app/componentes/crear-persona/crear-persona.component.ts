import { Component, OnInit } from '@angular/core';
import  {  FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Persona } from 'src/app/clase/Persona';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

 
  persona: Persona;
  registro: any;

  constructor(private fb: FormBuilder, private rutaActiva: ActivatedRoute, private router: Router) { }

  personaForm = this.fb.group({
    nombre: [''],
    apellido: [''],
    edad: [''],
    direccion: ['']

  })

  ngOnInit() {
    debugger;

    this.registro = this.rutaActiva.snapshot.params;

    if(Object.keys(this.registro).length){
      this.persona = this.registro;
		} 


    this.initForm(this.persona);
  }

initForm(editarPersona: Persona){
  this.personaForm = this.fb.group({
    nombre: [editarPersona.nombre ? editarPersona.nombre: ''],
    apellido: [editarPersona.apellido ? editarPersona.apellido: ''],
    edad: [editarPersona.edad ? editarPersona.edad: ''],
    direccion: [editarPersona.direccion ? editarPersona.direccion: '']

  })

}


  submit(){
    debugger;
    this.personaForm.value;
    this.persona = this.personaForm.value;

    this.router.navigate(['/consultar-persona-component', this.persona]);
  }

}
