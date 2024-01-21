import { Component, EventEmitter, Output } from '@angular/core';
import { Movie } from '../interfaces/movie-details';
import { MovieslistService } from '../movieslist.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  constructor(
    private _movieListService: MovieslistService,
    private router: Router
  ) {}
  searchResults!: Movie[];
  searchMovieResults(searchMovie: string) {
    if (searchMovie) {
      this._movieListService.getSearchResults(searchMovie).subscribe((res) => {
        this.searchResults = res.results;
        this._movieListService.setSearchResult(this.searchResults);
        this.router.navigate(['/search-results']);
      });
    }
  }
}
