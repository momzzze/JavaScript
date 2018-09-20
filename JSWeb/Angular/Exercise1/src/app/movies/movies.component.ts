import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters:Object;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopular().subscribe(data => {
      this.popular = data
      

    })
    this.movieService.getMoviesInTeaters().subscribe(data=>{
      this.theaters=data
    })
  }

}
