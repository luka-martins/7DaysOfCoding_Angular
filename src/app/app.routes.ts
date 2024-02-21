import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { NaveComponent } from './components/nave/nave.component';

export const routes: Routes = [
    {
        path:"",
        redirectTo:"home",
        pathMatch:"full"
    },
    {
        path:"home",
        component:HomeComponent,
        title:"home"
    },
    {
        path:"filmes",
        component:FilmesComponent,
        title:"filmes"
    },
    {
        path:"naves",
        component:NaveComponent,
        title:"Naves"
    }
];
