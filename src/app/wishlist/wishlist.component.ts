import { Component, inject } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { MovieType } from '../interfaces/movie-type';
import { CommonModule } from '@angular/common';
import { Movie } from '../interfaces/movie-details';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  constructor(private _router: Router) {}
  _wishlistService = inject(WishlistService);
  wishlistMovies!: Movie[];
  imgBase: string = 'https://image.tmdb.org/t/p/w500/';
  ngOnInit() {
    this.wishlistMovies = this._wishlistService.getwishListmovies();
  }
  wishlistCheck(movie: Movie) {
    this._wishlistService.wishlistCheck(movie);
    this.wishlistMovies = this._wishlistService.getwishListmovies();
  }
  movieDetails(id: number) {
    this._router.navigate([`details/${id}`]);
  }
}
