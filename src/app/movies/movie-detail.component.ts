import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
})
export class MovieDetailComponent implements OnInit {

  pageTitle: string = 'Movie Detail';

  constructor(private _router: Router, private _routeParams: ActivatedRoute) {
    this._routeParams.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      console.log("id::: "+id);
      this.pageTitle += `: ${id}`;
    });
  }

  onBack(): void {
    this._router.navigate(['movie-list']);
  }

}
