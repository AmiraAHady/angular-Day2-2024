import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-single-movie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.css',
})
export class SingleMovieComponent {
  @Input() selectedMovie: any;
  @Output() dataFromChild = new EventEmitter<string>();

  watchMovie(movieTitle: string) {
    // console.log(`${movieTitle}`);
    this.dataFromChild.emit(`the user want to watch ${movieTitle}`);
  }
}
