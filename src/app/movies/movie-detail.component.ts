import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MovieService } from "./movie.service";
import { IMovie } from "./movie";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {

    pageTitle: string = 'Movie Detail';
    movie: IMovie;
    private sub: Subscription;
    errorMessage: string;

    constructor(private _router: Router, private _routeParams: ActivatedRoute, private _movieService: MovieService) {

    }

    ngOnInit() {
        this._routeParams.params.subscribe(params => {
            let id = Number.parseInt(params['id']);
            console.log("id::: " + id);
            this.getProduct(id);
        });
    }

    getProduct(id: number) {
        this._movieService.getMovie(id).subscribe(
            movie => this.movie = movie,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['movie-list']);
    }

}
