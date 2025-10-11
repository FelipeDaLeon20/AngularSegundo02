import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { multiplicacion } from './multiplicacion';

@Component({
  selector: 'app-multiplicacion',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './multiplicacion.component.html',
  styleUrl: './multiplicacion.component.css'
})
export class MultiplicacionComponent {

  resultadoD!:number;
  formulariocd!:FormGroup;
  objDistancia=  new multiplicacion();
  

    

    ngOnInit():void
  {
    this.formulariocd=new FormGroup
    (
      {
        numerox1:new FormControl(''),
        numerox2:new FormControl(''),
        numeroy1:new FormControl(''),
        numeroy2:new FormControl(''),
      }
    )
  }
  distanciaPuntos():void
  {
    this.objDistancia.x1=this.formulariocd.value.numerox1;
    this.objDistancia.x2=this.formulariocd.value.numerox2;
    this.objDistancia.y1=this.formulariocd.value.numeroy1;
    this.objDistancia.y2=this.formulariocd.value.numeroy2;

    this.objDistancia.calcularDistancia();
    this.resultadoD=this.objDistancia.res;
  }
}
