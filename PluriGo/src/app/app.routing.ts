import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { DetalhesComponent } from './movies/detalhes/detalhes.component';

const APP_ROUTING: Routes = [
    {  path: '', component: HomeComponent },
    {  path: 'filmes', component: MoviesComponent },
    {  path: 'detalhes/:id', component: DetalhesComponent },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTING);