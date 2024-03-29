import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { DetailsComponent } from './details/details.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { SignComponent } from './sign/sign.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SearchResultsComponent } from './search-results/search-results.component';

export const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'nav', component: NavComponent, title: 'nav' },
  { path: 'footer', component: FooterComponent, title: 'footer' },
  { path: 'movies', component: MoviesComponent, title: 'movies' },
  { path: 'details/:id', component: DetailsComponent, title: 'details' },
  { path: 'register', component: RegisterComponent, title: 'register' },
  { path: 'sign', component: SignComponent, title: 'sign' },
  { path: 'wishlist', component: WishlistComponent, title: 'wishlist' },
  {
    path: 'recommended',
    component: RecommendedComponent,
    title: 'recommended',
  },
  {
    path: 'search-results',
    component: SearchResultsComponent,
    title: 'search result',
  },

  { path: '**', component: NotfoundComponent, title: 'notfound' },
];
