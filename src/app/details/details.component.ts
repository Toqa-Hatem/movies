import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieslistService } from '../movieslist.service';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  movie: any;
  id!: number;
  imgBase: string = 'https://image.tmdb.org/t/p/w500/';
  constructor(
    private activatedRoute: ActivatedRoute,
    private _moviesListService: MovieslistService
  ) {}
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this._moviesListService
      .getMovieDetails(this.id)
      .subscribe((res) => (this.movie = res));
  }
}
