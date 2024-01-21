import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  constructor(private _wishlistService: WishlistService) {}
  counter: number = 0;
  ngOnInit() {
    this._wishlistService
      .getCounter()
      .subscribe((value) => (this.counter = value));
  }
}
