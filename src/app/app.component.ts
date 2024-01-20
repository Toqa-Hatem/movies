import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent} from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { SignComponent } from './sign/sign.component';
import { RegisterComponent } from './register/register.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,FooterComponent ,NavComponent ,DetailsComponent , SearchComponent ,
    MoviesComponent,NotfoundComponent ,RecommendedComponent , SignComponent , RegisterComponent , WishlistComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
}
