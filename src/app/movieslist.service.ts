import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieType } from './interfaces/movie-type';

@Injectable()
export class MovieslistService {
  private apiKey: string = '8b77adeec843eca6a643bd9fc7c976f8';
  constructor(private _httpClient: HttpClient) {}
  getTrending(): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`
    );
  }
  getMovieDetails(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`
    );
  }
  getRecommendedMovies(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${this.apiKey}`
    );
  }
}
