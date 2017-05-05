/**
 * Created by Jainee on 3/22/2017.
 */
import {Component, Input, Output, EventEmitter, HostListener} from "@angular/core";

@Component({
  selector: 'ai-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent {
  @Input() rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5;
  }

  @HostListener('click', ['$event'])
  onClick(e) {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
