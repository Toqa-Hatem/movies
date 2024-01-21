import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { Movie } from '../interfaces/movie-details';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../wishlist.service';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
  imports: [CommonModule, SearchComponent],
})
export class SearchResultsComponent {
  constructor(
    private _movieListService: MovieslistService,
    private router: Router,
    private _wishlistService: WishlistService,
    private route: ActivatedRoute
  ) {}
  searchResults: Movie[] = [];
  imgBase: string = 'https://image.tmdb.org/t/p/w500/';
  ngOnInit() {
    this.searchResults = this._movieListService.getSearchResult();
  }
  movieDetails(id: number) {
    this.router.navigate([`details/${id}`]);
  }
  wishlistCheck(movie: Movie) {
    this._wishlistService.wishlistCheck(movie);
  }
}
