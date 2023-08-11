import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/models/movie.model';
import { AlertifyService } from 'src/services/alertify.service';
import { MovieService } from 'src/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService],
})
export class MoviesComponent {
  movieList: Movie[];
  filteredMovieList: Movie[];
  popularMovieList: Movie[];
  filterText: string;
  error: any;

  constructor(private alertify: AlertifyService, private movieService: MovieService, private activatedRoute: ActivatedRoute) {
    this.movieList = [];
    this.filteredMovieList = [];
    this.popularMovieList = [];
    this.filterText = "";
    this.loadData();
  }

  loadData(): void {
    this.activatedRoute.params.subscribe(param => this.movieService.getMovieList(param["categoryId"]).subscribe(
      data => {
        this.movieList = data;
        this.filteredMovieList = this.movieList;
        this.popularMovieList = this.movieList.filter(x => x.isPopular);
      },
      error => this.error = error,
    ));
  }

  onFilterChange(): void {
    let filterText = this.filterText.replaceAll(" ", "").toLowerCase();
    this.filteredMovieList = this.movieList.filter(x => x.title.replaceAll(" ", "").toLowerCase().indexOf(filterText) != -1 || x.description.replaceAll(" ", "").toLowerCase().indexOf(filterText) != -1);
  }

  addToList($event: any, movie: Movie): void {
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