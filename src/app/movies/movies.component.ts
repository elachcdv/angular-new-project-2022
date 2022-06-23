import {Component} from '@angular/core';
import {Movie} from './model/movie';
import {MoviesService} from './services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  public movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  public getMoviesList(searchTerm: any) {
    this.moviesService
      .getMovies(searchTerm)
      .subscribe(data => {
        // console.log(data);
        this.movies = data.results;
      });
  }
}
