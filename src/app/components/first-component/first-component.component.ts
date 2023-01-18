import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Vagner';
  age = 30;
  job = 'Programador';
  hobbie = ['Correr', ' Jogar', ' Estudar'];
  car = {
    name: "Duster",
    year: 2016,
  };
  constructor () {}
  ngOnInit(): void {
    
  }
}
