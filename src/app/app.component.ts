import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  persona= {
    'nombre': 'Pili',
    'apellido': 'Alegre',
    'fecnac': new Date()
  }
 fechas:Array<Date>=[0,1,2,3,4,5,6,7,8,9,10,11].map((i)=>{return new Date(2022,i,1);});

  
}
