export class zodiaco
{
    
    diaN!:number;
    mesN!:number;
    anioN!:number;
    edadV!:number;
    numClave!:number;
    signo!:string;
    sexoC!:number;
    sexoV!:string;

    calcularEdad()
    {
     const fechaActual = new Date();
     const FechaNacimiento= new Date(this.anioN,this.mesN,this.diaN);
     let edad = fechaActual.getFullYear() - FechaNacimiento.getUTCFullYear();
     const mesActual=fechaActual.getMonth();
     const mesNacimiento=FechaNacimiento.getMonth();
     const diaActual=fechaActual.getDay();
     const diaNacimiento=FechaNacimiento.getDay();

     if(mesNacimiento>mesActual || (mesNacimiento==mesActual && diaNacimiento>diaActual))
     {
        edad--;
     }
     return this.edadV=edad;
    }
    conocerSignoChino()
    {
     this.numClave=this.anioN%12;
     switch(this.numClave)
     {
        case 0: this.signo="Mono";
        break;
        case 1: this.signo="Gallo";
        break;
        case 2: this.signo="Perro";
        break;
        case 3: this.signo="Cerdo";
        break;
        case 4: this.signo="Rata";
        break;
        case 5: this.signo="Buey";
        break;
        case 6: this.signo="Tigre";
        break;
        case 7: this.signo="Conejo";
        break;
        case 8: this.signo="Dragón";
        break;
        case 9: this.signo="Serpiente";
        break;
        case 10: this.signo="Caballo";
        break;
        case 11: this.signo="Cabra";
        break;
     }
     return this.signo;

    }
    conocerSexo()
    {
      switch(this.sexoC)
      {
         case 0: this.sexoV="Hombre";
         break;
         case 1: this.sexoV="Mujer";
         break;
      }
      return this.sexoV;
    }

}