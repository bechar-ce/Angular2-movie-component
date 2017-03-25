/**
 * Created by Jainee on 3/22/2017.
 */
import {Component, OnInit} from "@angular/core";
import {IMovie} from "./movie";
import {MovieService} from "./movie.service";

@Component({
  selector: 'mm-movies',
  templateUrl: './movie-list.component.html'
})

export class MovieListComponent implements OnInit {
  pageTitle: string = 'Movie List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'DDLJ';
  errorMessage: string;
  movies: IMovie[];

  constructor(private _movieService: MovieService) {
  }

  ngOnInit(): void {
    this._movieService.getMovies()
      .subscribe(movies=>this.movies = movies, error => this.errorMessage = <any>error);
  }

  toggleImage() {
    console.log("toggleImage:::");
    this.showImage = !this.showImage;
  }

  onNotify(message: string): void {
    this.pageTitle = 'Movie List: ' + message;
  }
}
