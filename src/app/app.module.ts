import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MovieListComponent} from "./movies/movie-list.component";
import {StarComponent} from "./shared/star.component";
import {MovieFilterPipe} from './movies/movie-filter.pipe';
import {MovieService} from "./movies/movie.service";
import {WelcomeComponent} from './home/welcome/welcome.component';
import {RouterModule, Routes} from "@angular/router";
import {rootRouterConfig} from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    StarComponent,
    MovieFilterPipe,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
