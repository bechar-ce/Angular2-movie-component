import {Component, NgModule} from '@angular/core';
import {MovieListComponent} from "./movies/movie-list.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  pageTitle: string = 'Angular 2 Movie Management';
}
