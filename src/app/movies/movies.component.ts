import { Component, OnInit } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { CommonModule } from '@angular/common';
import { MovieType } from '../interfaces/movie-type';
import { Router, RouterLink } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { SearchComponent } from '../search/search.component';
import { Movie } from '../interfaces/movie-details';
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  recommendedMovies: Movie[] = [];
  imgPrefix: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(
    private _MovieslistService: MovieslistService,
    private router: Router,
    private _wishlistService: WishlistService
  ) {}
  ngOnInit(): void {
    this._MovieslistService.getTrending().subscribe((data) => {
      this.recommendedMovies = data.results;
      let wishlistMovieIds = this._wishlistService
        .getwishListmovies()
        .map((wishlistMovies) => wishlistMovies.id);
      this.recommendedMovies.forEach((movie) => {
        movie.flag = wishlistMovieIds.includes(movie.id);
      });

      console.log(data);
    });
  }
  movieDetails(id: number) {
    this.router.navigate([`details/${id}`]);
  }
  wishlistCheck(movie: Movie) {
    this._wishlistService.wishlistCheck(movie);
  }
}
