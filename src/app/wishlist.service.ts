import { Injectable } from '@angular/core';
import { Movie } from './interfaces/movie-details';
import { BehaviorSubject } from 'rxjs';
import { NumberValueAccessor } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  constructor() {}
  private wishListmovies: Movie[] = JSON.parse(
    localStorage.getItem('wishlistMovies') || '[]'
  );
  getCounterFromLocalStorage(): number {
    const storedCounter = localStorage.getItem('counter');
    return storedCounter ? +storedCounter : 0;
  }
  private counter = new BehaviorSubject<number>(
    this.getCounterFromLocalStorage()
  );
  wishlistCheck(movie: Movie) {
    let moviesId = this.wishListmovies.map((existingMovie) => existingMovie.id);
    if (moviesId.includes(movie.id)) {
      this.removeFromWishlist(movie);
    } else {
      this.addToWishlist(movie);
    }
    this.counter.next(this.wishListmovies.length);
    localStorage.setItem('wishlistMovies', JSON.stringify(this.wishListmovies));
    localStorage.setItem('counter', JSON.stringify(this.wishListmovies.length));
  }
  addToWishlist(movie: Movie) {
    this.wishListmovies.push(movie);
    movie.flag = true;
  }
  getwishListmovies() {
    return this.wishListmovies;
  }
  wishlistIds() {
    return this.wishListmovies.map((wishlistMovies) => wishlistMovies.id);
  }
  removeFromWishlist(movie: Movie) {
    this.wishListmovies = this.wishListmovies.filter((m) => m.id !== movie.id);
    movie.flag = false;
  }
  getCounter() {
    return this.counter.asObservable();
  }
}
