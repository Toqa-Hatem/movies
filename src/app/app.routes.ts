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
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home' },

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
  { path: '**', component: NotfoundComponent, title: 'notfound' },
];
