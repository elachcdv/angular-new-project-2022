import {Component} from '@angular/core';
import {Movie} from './model/movie';
import {MoviesService} from './services/movies.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  public movies: Movie[] = [];
  totalPages: number = 0;
  perPage: number = 0;

  constructor(private moviesService: MoviesService) {}

  public getMoviesList(searchTerm: any) {
    this.moviesService
      .getMovies(searchTerm)
      .subscribe(data => {
        // console.log(data);
        this.movies = data.results;
        this.totalPages = data.results.length;
        console.log(this.totalPages);
        this.perPage = data.results.length;
      });
  }

  onPageChange(event: PageEvent) {
    const nextPage = event.pageIndex + 1;
  }
}
