import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Movie } from 'src/models/movie.model';
import { ErrorService } from './error.service';
import { movieListUrl } from 'src/constants/url_constants';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getMovieList(categoryId: number): Observable<Movie[]> {
    let url = movieListUrl;
    if (categoryId) {
      url += "?categoryId =" + categoryId;
    }
    return this.http.get<Movie[]>(url).pipe(
      catchError(this.errorService.handleHttpError),
    );
  }
}