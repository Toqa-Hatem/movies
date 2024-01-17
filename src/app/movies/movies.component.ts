import { Component , OnInit } from '@angular/core';
import { MovieslistService } from '../movieslist.service';
import { CommonModule } from '@angular/common'; 
// import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent  implements OnInit{
  
  recommendedMovies:any[] = [];
  imgPrefix:string = 'https://image.tmdb.org/t/p/w500/';
  constructor(private _MovieslistService: MovieslistService){
    
  
  }
  ngOnInit(): void {
   this. _MovieslistService.getTrending().subscribe((data=>{
      this.recommendedMovies = data.results;
      console.log(data)   ;       }))

  
}}
