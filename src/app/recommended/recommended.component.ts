import { Component, Input } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.css',
})
export class RecommendedComponent {
  constructor(
    private _moviesListService: MovieslistService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}
  @Input() id!: number;
  recommendedMovies!: any[];
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
    this._moviesListService
      .getRecommendedMovies(this.id)
      .subscribe((res) => (this.recommendedMovies = res.results));
  }
}
