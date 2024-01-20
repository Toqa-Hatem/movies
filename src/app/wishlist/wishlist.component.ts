import { Component } from '@angular/core';
import { WishlistService } from '../wishlist.service';
import { MovieType } from '../interfaces/movie-type';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent {
  constructor(private _wishlistService: WishlistService) {}
  wishlist!: MovieType[];
  imgBase: string = 'https://image.tmdb.org/t/p/w500/';
  ngOnInit() {
    this.wishlist = this._wishlistService.getMovies();
  }
}
