import { Routes } from '@angular/router';
import {WelcomeComponent} from "./home/welcome/welcome.component";
import {MovieListComponent} from "./movies/movie-list.component";

export const rootRouterConfig: Routes = [
  {path: 'home', component: WelcomeComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: '**', component: WelcomeComponent}
];

