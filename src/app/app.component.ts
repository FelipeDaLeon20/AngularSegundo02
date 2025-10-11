import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formulario/distancia/distancia.component';
import { MultiplicacionComponent } from './formulario/multiplicacion/multiplicacion.component';
import { ZodiacoComponent } from './formulario/zodiaco/zodiaco.component';
import { multiplicacion } from './formulario/multiplicacion/multiplicacion';

@Component({
  selector: 'app-root',
  imports: [MultiplicacionComponent,ZodiacoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
}
