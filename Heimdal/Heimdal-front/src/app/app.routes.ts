import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RecursosComponent } from './components/recursos/recursos.component';
import { LoginComponent } from './components/login/login.component';


export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'proyectos', component: ProyectosComponent },
    { path: 'recursos', component: RecursosComponent },
    { path: 'login', component: LoginComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];