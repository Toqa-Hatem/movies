import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MovieslistService {
  constructor(private _httpClient: HttpClient) {}
  getTrending(): Observable<any> {
    return this._httpClient.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=8b77adeec843eca6a643bd9fc7c976f8'
    );
  }
  getMovieDetails(id: number): Observable<any> {
    return this._httpClient.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8b77adeec843eca6a643bd9fc7c976f8`
    );
  }
}
