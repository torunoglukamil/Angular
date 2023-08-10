import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from 'src/models/movie.model';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {
  transform(movieList: Movie[], filterText: string): Movie[] {
    filterText = filterText.replaceAll(" ", "").toLowerCase();
    return movieList.filter(x => x.title.replaceAll(" ", "").toLowerCase().indexOf(filterText) != -1 || x.description.replaceAll(" ", "").toLowerCase().indexOf(filterText) != -1);
  }
}