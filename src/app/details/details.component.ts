import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieslistService } from '../movieslist.service';
import test from 'node:test';
import { MovieDetails } from '../interfaces/movie-details';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  movie!: MovieDetails;
  id!: number;
  imgBase: string = 'https://image.tmdb.org/t/p/w500/';
  companyLogo!: any[];
  companyLogoArr!: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _moviesListService: MovieslistService
  ) {}
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this._moviesListService.getMovieDetails(this.id).subscribe((res) => {
      this.movie = res;
      this.companyLogoArr = this.movie.production_companies.filter(
        (company: any) => company.logo_path != null
      );
      if (this.companyLogoArr.length) {
        this.companyLogo = this.companyLogoArr[0].logo_path;
      }
    });
  }
}
