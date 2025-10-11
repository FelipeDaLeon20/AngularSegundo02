

export class multiplicacion
{
    
   x1!:number;
   x2!:number;
   y1!:number;
   y2!:number;
   difx!:number;
   dify!:number;
   res!:number;
  calcularDistancia()
  {
    this.difx=this.x2-this.x1;
    this.dify=this.y2-this.y1;
    return this.res=Math.sqrt((this.difx*this.difx)+(this.dify*this.dify));
  }
}