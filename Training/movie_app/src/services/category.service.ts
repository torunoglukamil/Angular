import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { Category } from 'src/models/category.model';
import { ErrorService } from './error.service';
import { categoryListUrl } from 'src/constants/url_constants';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getCategoryList(): Observable<Category[]> {
    return this.http.get<Category[]>(categoryListUrl).pipe(
      catchError(this.errorService.handleHttpError),
    );
  }
}