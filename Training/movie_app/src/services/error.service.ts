import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  handleHttpError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("Error: " + error.error.message);
    } else {
      switch (error.status) {
        case 404:
          console.log("Not Found");
          break;
        case 403:
          console.log("Access Denied");
          break;
        case 500:
          console.log("Interval Server");
          break;
        default:
          console.log("Bilinmeyen bir hata oluştu.");
      }
    }
    return throwError(() => new Error("Bir hata oluştu."));
  }
}