import { Component, OnInit } from '@angular/core';
import { IImageTextBox } from "./image-text-box";
import { Router, ActivatedRoute } from "@angular/router"
import { Subscription } from "rxjs";
import { ImageTextBoxService } from "./image-text-box.service";

@Component({
  selector: 'app-image-text-box',
  templateUrl: './image-text-box.component.html',
  styleUrls: ['./image-text-box.component.css']
})
export class ImageDialogBoxComponent implements OnInit {

  imageTextBoxs: IImageTextBox[];
  private sub: Subscription;
  errorMessage: string;

  constructor(private _imageTexBoxService: ImageTextBoxService) { }

  ngOnInit() {
    this._imageTexBoxService.getImageTextBox()
      .subscribe(imageTextBoxs => this.imageTextBoxs=imageTextBoxs, error => this.errorMessage = <any>error);
  }

}
