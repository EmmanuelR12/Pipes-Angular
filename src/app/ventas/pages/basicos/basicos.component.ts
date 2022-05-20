import { Component,  } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {
  nombreLower: string='emmanuel'
  nomreUpper: string='Emmanuel'
  nombrecompleto: string='emManUeL'

  fecha: Date = new Date();

}
