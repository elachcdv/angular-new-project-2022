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
  // loadedMovies = [];

  constructor(private moviesService: MoviesService) {}

  public getMoviesList(): void {
    this.moviesService.getMovies().subscribe(data => {
      // console.log(data);
      this.movies = data.results;
    });
  }

  ngOnInit(): void {
    // this.moviesService.getMovies().pipe(
    //   map((responseData: any) => {
    //     console.log(responseData);
    //   }),
    // ).subscribe(data => {
    //   console.log(data);
    // console.log(data.results);
    // });
  }
}
