import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from 'src/modules/routing.module';

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
import { ErrorService } from 'src/services/error.service';
import { CategoryService } from 'src/services/category.service';
import { MovieService } from 'src/services/movie.service';

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
    HttpClientModule,
    RoutingModule,
  ],
  providers: [
    AlertifyService,
    ErrorService,
    CategoryService,
    MovieService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }