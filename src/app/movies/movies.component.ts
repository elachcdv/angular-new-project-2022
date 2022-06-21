import {Component, OnInit} from '@angular/core';
import {Movie} from './model/movie';
import {MoviesService} from './services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  public movies: Movie[] = [];
  movieTitle: string = '';

  constructor(private moviesService: MoviesService) {}

  public getMoviesList(): void {
    this.moviesService.getMovies().subscribe(data => {
      // console.log(data);
      this.movies = data.results;
    });
  }

  getMovieTitle() {
    console.log('this is movie title:', this.movieTitle);
  }

  ngOnInit(): void {}
}
