import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieType } from './interfaces/movie-type';
import { Movie } from './interfaces/movie-details';

@Injectable()
export class MovieslistService {
  private apiKey: string = '8b77adeec843eca6a643bd9fc7c976f8';
  private searchResult: Movie[] = [];
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
  getSearchResults(movieName: string): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${movieName}`
    );
  }
  setSearchResult(searchResults: any) {
    this.searchResult = searchResults;
  }
  getSearchResult() {
    return this.searchResult;
  }
}
