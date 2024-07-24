import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SingleMovieComponent } from '../single-movie/single-movie.component';
import { IMovie } from './IMovie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, SingleMovieComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit{

  allMovies: IMovie[]=[] 
  // movieServ:MoviesService
 movieServ=new MoviesService()

  // constructor(){
  //   this.movieServ=new MoviesService()
    
  // }
  ngOnInit(): void {
    this.allMovies=this.movieServ.getAllMovies() 
  }


  receviedDataFromChild(childData:string){
     console.log(`recived data successfuly ,direct user to watch ${childData}`);
     
  }
}
