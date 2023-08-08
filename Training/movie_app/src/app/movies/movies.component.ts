import { Component } from '@angular/core';
import { Movie } from 'src/models/movie.model';
import { MovieRepository } from 'src/repositories/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  private repository: MovieRepository;
  movieList: Movie[];

  constructor() {
    this.repository = new MovieRepository();
    this.movieList = this.repository.getMovieList();
  }
}