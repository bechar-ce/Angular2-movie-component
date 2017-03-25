import {Injectable} from '@angular/core';
import {IMovie} from "./movie";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class MovieService {

  //private _movieUrl = 'movies/movies.json';

  constructor(private _http: Http) {
  }

  /*getMovies(): Observable<IMovie[]> {
    return this._http.get(this._movieUrl)
      .map((response:Response)=><IMovie[]>response.json())
      .catch(this.handleError);
  }

  private handleError(error:Response){
    console.log("Error:: "+error);
    return Observable.throw(error.json().error || "Server Error")
  }*/

  getMovies(): IMovie[] {
    return [
      {
        "movieID": 10,
        "movieName": "DDLJ",
        "language": ["Hindi"],
        "runTime": "1 Hour 45 Minutes",
        "actors": [
          "Anne Bancroft",
          "Dustin Hoffman",
          "Katharine Ross",
          "William Daniels"
        ],
        "starRating": 5,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
      }, {
        "movieID": 11,
        "movieName": "Daar",
        "language": ["English"],
        "runTime": "2 Hour 5 Minutes",
        "actors": ["a", "b", "c"],
        "starRating": 3.3,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
      }
    ]
  }
}
