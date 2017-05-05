import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IImageTextBox } from "./image-text-box";
import { Observable } from "rxjs";


@Injectable()
export class ImageTextBoxService {

  private _imageTextBoxUrl: string = "../api/image-text-box/image-text-box.json"

  constructor(private _http: Http) { }

  getImageTextBox(): Observable<IImageTextBox[]> {
    return this._http.get(this._imageTextBoxUrl)
      .map((response: Response) => <IImageTextBox[]>response.json())
      .do(data => console.log("All: " + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.log("Error: " + error);
    return Observable.throw(error.json().error || "Server Error")
  }

}
