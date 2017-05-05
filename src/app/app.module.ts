import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from "./movies/movie-list.component";
import { StarComponent } from "./shared/star-component/star.component";
import { MovieFilterPipe } from './movies/movie-filter.pipe';
import { MovieService } from "./movies/movie.service";
import { ImageTextBoxService } from "./shared/image-text-box/image-text-box.service";
import { AppHeaderComponent } from './app-header/app-header.component';
import { WelcomeComponent } from './home/welcome/welcome.component';
import { RouterModule, Routes } from "@angular/router";
import { rootRouterConfig } from "./app.routes";
import { MovieDetailComponent } from './movies/movie-detail.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ImageDialogBoxComponent } from './shared/image-text-box/image-text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MovieListComponent,
    StarComponent,
    MovieFilterPipe,
    WelcomeComponent,
    MovieDetailComponent,
    AppFooterComponent,
    ImageDialogBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [MovieService, ImageTextBoxService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
