import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule,FormGroup,FormControl } from '@angular/forms';
import { zodiaco } from './zodiaco';

@Component({
  selector: 'app-zodiaco',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
formularioZodiaco!:FormGroup;
objZodiaco=new zodiaco();
}
