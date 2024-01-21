import { Component, Input } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecommendedMovieType } from '../interfaces/movie-type';
import { Movie } from '../interfaces/movie-details';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css',
})
export class RecommendedComponent {
  constructor(
    private _moviesListService: MovieslistService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _wishlistService: WishlistService
  ) {}
  @Input() id!: number;
  recommendedMovies!: Movie[];
  imgBase: string = 'https://image.tmdb.org/t/p/w500/';
  ngOnInit() {
    this._activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.reloadData(this.id);
    });
  }
  movieDetails(id: number) {
    this._router.navigate([`/details/${id}`]);
  }
  reloadData(id: number) {
    let wishlistIds = this._wishlistService.wishlistIds();
    this._moviesListService.getRecommendedMovies(this.id).subscribe((res) => {
      this.recommendedMovies = res.results;
      if (this.recommendedMovies) {
        this.recommendedMovies.forEach((movie) => {
          movie.flag = wishlistIds.includes(movie.id);
        });
      }
    });
  }
  wishlistCheck(movie: Movie) {
    this._wishlistService.wishlistCheck(movie);
  }
}
