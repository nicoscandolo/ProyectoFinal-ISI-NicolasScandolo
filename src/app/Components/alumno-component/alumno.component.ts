import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy, DoCheck, Input } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit, OnChanges {
      @Input() nombre: string;
      public apellido: string;
      public mail: string;
      public habilitado: boolean;




  constructor() {
    this.nombre = 'Nacha';
    this.apellido = 'Alessandroni';
    this.mail = 'nacha_alessandroni@gmail.com';
    this.habilitado = true;
  }

  ngOnInit() {
    console.log('Metodo OnInit inicializado');
  }

  ngOnChanges(Changes: SimpleChanges) {
    console.log(Changes);
  }




}
