import {Component, OnInit} from '@angular/core';
import {ImageTextBoxService} from "../../shared/image-text-box/image-text-box.service";
import {IImageTextBox} from "../../shared/image-text-box/image-text-box";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public pageTitle: string = "Welcome";
  imageTextBoxs: IImageTextBox[];
  errorMessage: string;

  constructor() {

  }

  ngOnInit() {

  }

}
