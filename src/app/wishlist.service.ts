import { Injectable } from '@angular/core';
import { MovieType } from './interfaces/movie-type';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  private movies: MovieType[] = [];
  constructor() {}
  addToWishlist(movie: MovieType) {
    this.movies.push(movie);
  }
  getMovies() {
    return this.movies;
  }
}
