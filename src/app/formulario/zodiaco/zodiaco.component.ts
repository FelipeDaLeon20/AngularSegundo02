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
edadM!:number;
signoM!:string;
nombreM!:string;
sexoM!:string;

ngOnInit():void
  {
    this.formularioZodiaco=new FormGroup
    (
      {
        nombre:new FormControl(''),
        aPaterno:new FormControl(''),
        aMaterno:new FormControl(''),
        dia:new FormControl(''),
        mes:new FormControl(''),
        anio:new FormControl(''),
        sexo:new FormControl(''),
      }
    )
  }
  imprimirZodiaco()
  {
    this.objZodiaco.diaN=this.formularioZodiaco.value.dia;
    this.objZodiaco.mesN=this.formularioZodiaco.value.mes;
    this.objZodiaco.anioN=this.formularioZodiaco.value.anio;
    this.objZodiaco.sexoC=this.formularioZodiaco.value.sexo;
    this.objZodiaco.calcularEdad();
    this.edadM=this.objZodiaco.edadV;
    this.objZodiaco.conocerSignoChino();
    this.signoM=this.objZodiaco.signo;
    this.objZodiaco.conocerSexo();
    this.sexoM=this.objZodiaco.sexoV;
    this.nombreM=this.formularioZodiaco.value.nombre+' '+this.formularioZodiaco.value.aPaterno+' '+this.formularioZodiaco.value.aMaterno;
    
  }


}
