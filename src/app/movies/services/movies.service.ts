import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/internal/operators/map';

import {Movie, MovieResults} from '../model/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  public getMovies(): Observable<MovieResults> {
    return this.http.get<MovieResults>(
      'https://imdb-api.com/en/API/SearchMovie/k_pgd93xda/incepcja/',
    );
    // .pipe(map(response => response.results));
  }
}
