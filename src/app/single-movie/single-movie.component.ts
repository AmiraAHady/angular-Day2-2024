import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IMovie } from '../movies/IMovie';
import { MovieRatingComponent } from '../movie-rating/movie-rating.component';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-single-movie',
  standalone: true,
  imports: [CommonModule, MovieRatingComponent],
  templateUrl: './single-movie.component.html',
  styleUrl: './single-movie.component.css',
})
export class SingleMovieComponent implements OnInit {
  // late
  @Input() movieId!: number;
  selectedMovie!: IMovie ;
  movieSer: MoviesService;
  constructor() {
    this.movieSer = new MoviesService();
  }
  ngOnInit(): void {
    this.selectedMovie = this.movieSer.getMovieById(this.movieId) as IMovie;
  }

  // @Input() selectedMovie!: IMovie;
  // @Output() dataFromChild = new EventEmitter<string>();

  // watchMovie(movieTitle: string) {
  //   // console.log(`${movieTitle}`);
  //   this.dataFromChild.emit(`the user want to watch ${movieTitle}`);
  // }
}
