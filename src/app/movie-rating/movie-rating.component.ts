import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-movie-rating',
  standalone: true,
  imports: [],
  templateUrl: './movie-rating.component.html',
  styleUrl: './movie-rating.component.css',
})
export class MovieRatingComponent implements OnChanges {
  @Input() rating!: number;
  clipWidth: number = 0;
  complete:boolean=true

  ngOnChanges() {
    this.clipWidth = (this.rating * 75) / 5;
  }
}
