import { Component } from '@angular/core';
import { Movie } from 'src/models/movie.model';
import { MovieRepository } from 'src/repositories/movie.repository';
import { AlertifyService } from 'src/services/alertify.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  private repository: MovieRepository;
  movieList: Movie[];
  filteredMovieList: Movie[];
  popularMovieList: Movie[];
  filterText: string;

  constructor(private alertify: AlertifyService) {
    this.repository = new MovieRepository();
    this.movieList = this.repository.getMovieList();
    this.filteredMovieList = this.movieList;
    this.popularMovieList = this.repository.getPopularMovieList();
    this.filterText = "";
  }

  onFilterChange() {
    let filterText = this.filterText.replaceAll(" ", "").toLowerCase();
    this.filteredMovieList = this.movieList.filter(x => x.title.replaceAll(" ", "").toLowerCase().indexOf(filterText) != -1 || x.description.replaceAll(" ", "").toLowerCase().indexOf(filterText) != -1);
  }

  addToList($event: any, movie: Movie) {
    if ($event.target.classList.contains('btn-primary')) {
      $event.target.innerText = "Listeden Çıkar";
      $event.target.classList.remove('btn-primary');
      $event.target.classList.add('btn-danger');
      this.alertify.success(movie.title.toUpperCase() + " listeye eklendi");
    } else {
      $event.target.innerText = "Listeye Ekle";
      $event.target.classList.remove('btn-danger');
      $event.target.classList.add('btn-primary');
      this.alertify.error(movie.title.toUpperCase() + " listeden çıkarıldı.")
    }
  }
}