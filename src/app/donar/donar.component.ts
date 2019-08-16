import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-donar',
  templateUrl: './donar.component.html',
  styleUrls: ['./donar.component.css']
})

export class DonarComponent implements OnInit {
  // se pone para que sea publico la entrada para el html
  @Input() public model: number;

  constructor() {
   }
  ngOnInit() {
    this.model = 25;
  }
  SumCroquetasD(croquetasD: HTMLInputElement) {
    const aux = Number(croquetasD.value);
    this.model = aux + this.model;
    console.log(this.model);
    croquetasD.value = '';
    return false;
  }
}
