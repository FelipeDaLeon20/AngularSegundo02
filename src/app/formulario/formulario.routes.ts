import { Routes } from '@angular/router';

export default
[
    {
     path:'distancia',
     loadComponent:()=>import('./distancia/distancia.component')
    },
    {
        path:'multiplicacionn',
        loadComponent:()=>import('./multiplicacion/multiplicacion.component')
    },
    {
        path:'zodiaco',
        loadComponent:()=>import('./zodiaco/zodiaco.component')
    }
]
