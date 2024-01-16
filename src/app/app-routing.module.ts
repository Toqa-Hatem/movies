import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
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
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent },
  { path: 'nav', component:NavComponent },
  { path: 'footer',  component:FooterComponent },
  { path: 'movies',  component: MoviesComponent },
  { path: 'details',  component: DetailsComponent },
  { path:'register',  component: RegisterComponent },
  { path:'sign',  component:SignComponent },
  { path:'wishlist',  component: WishlistComponent},
  { path:'recommended',  component: RecommendedComponent },
  { path:'**',  component: NotfoundComponent },

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
