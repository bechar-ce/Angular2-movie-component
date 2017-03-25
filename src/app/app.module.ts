import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MovieListComponent} from "./movies/movie-list.component";
import {StarComponent} from "./shared/star.component";
import { MovieFilterPipe } from './movies/movie-filter.pipe';
import {MovieService} from "./movies/movie.service";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    StarComponent,
    MovieFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
