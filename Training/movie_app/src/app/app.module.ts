import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriesComponent } from './categories/categories.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TestComponent } from './test/test.component';
import { FooterComponent } from './footer/footer.component';

import { SummaryPipe } from 'src/pipes/summary.pipe';
import { MovieFilterPipe } from 'src/pipes/movie-filter.pipe';
import { AlertifyService } from 'src/services/alertify.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    MoviesComponent,
    MovieDetailsComponent,
    TestComponent,
    FooterComponent,
    SummaryPipe,
    MovieFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }