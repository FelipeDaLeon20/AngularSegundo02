import { Routes } from '@angular/router';

export default
[
    {
     path:'agregar',
     loadComponent:()=>import('./agregar/agregar.component')
    },
    {
        path:'alumnos',
        loadComponent:()=>import('./alumnos/alumnos.component')
    },
    {
     path:'editar',
     loadComponent:()=>import('./editar/editar.component')
    },
    {
        path:'eliminar',
        loadComponent:()=>import('./eliminar/eliminar.component')
    }
]
