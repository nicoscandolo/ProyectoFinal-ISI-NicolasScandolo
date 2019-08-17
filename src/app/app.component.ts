import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck, OnInit {
  title = 'ProyectoFinal-ISI-NicolasScandolo';

  ngOnInit() {
  this.title = localStorage.getItem('title');
  }

  ngDoCheck() {
  }
}
