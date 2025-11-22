import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {initFlowbite} from 'flowbite';
import { DistanciaComponent } from './formulario/distancia/distancia.component';
import { MultiplicacionComponent } from './formulario/multiplicacion/multiplicacion.component';
import { ZodiacoComponent } from './formulario/zodiaco/zodiaco.component';
import { multiplicacion } from './formulario/multiplicacion/multiplicacion';
import { NavbarComponent } from './navbar/navbar.component';
import { TempComponent } from "./tem/temp/temp.component";
import { TemhComponent } from "./tem/temh/temh.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo02';
  ngOnInit():void
  {
    initFlowbite();
  }
}
