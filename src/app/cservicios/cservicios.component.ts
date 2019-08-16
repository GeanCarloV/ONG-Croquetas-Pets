import { Component, OnInit, Input } from '@angular/core';
import { Servicios } from './cservicios.model';


@Component({
  selector: 'app-cservicios',
  templateUrl: './cservicios.component.html',
  styleUrls: ['./cservicios.component.css']
})
export class CserviciosComponent implements OnInit {
  @Input() servicioss: Servicios;

  constructor() { }

  ngOnInit() {
  }

}
