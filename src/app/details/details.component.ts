import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieslistService } from '../movieslist.service';
import { Movie } from '../interfaces/movie-details';
import { RecommendedComponent } from '../recommended/recommended.component';
import { Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { CommonModule } from '@angular/common';
import { MovieType } from '../interfaces/movie-type';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink, RecommendedComponent, CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  movie!: Movie;
  id!: number;
  imgBase: string = 'https://image.tmdb.org/t/p/w500/';
  companyLogo!: any[];
  companyLogoArr!: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _moviesListService: MovieslistService,
    private _router: Router,
    private _wishlistService: WishlistService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = parseInt(params['id']);
      this.reloadData(this.id);
    });
  }
  private reloadData(id: number) {
    this._moviesListService.getMovieDetails(id).subscribe((res) => {
      this.movie = res;
      this.companyLogoArr = this.movie.production_companies.filter(
        (company: any) => company.logo_path != null
      );
      if (this.companyLogoArr.length) {
        this.companyLogo = this.companyLogoArr[0].logo_path;
      }
      let wishlistMovieIds = this._wishlistService.wishlistIds();
      if (wishlistMovieIds.includes(id)) {
        this.movie.flag = true;
      }
    });
  }
  wishlistCheck(movie: Movie) {
    this._wishlistService.wishlistCheck(movie);
  }
}
