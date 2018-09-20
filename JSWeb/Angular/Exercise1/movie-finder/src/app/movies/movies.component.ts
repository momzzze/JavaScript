import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theaters: Object;
  kids: Object;
  dramas: Object;
  searchRes: any;
  isSearch: boolean;


  constructor(private movieService: MovieService) { }
  search(myQUery) {
    this.movieService.findMovie(myQUery['search']).subscribe(data => {

      this.searchRes = data
      if (this.searchRes.results.length > 0) {
        this.isSearch = true;
      }
    })
  }
  ngOnInit() {
    this.movieService.getPopular().subscribe(data => {
      this.popular = data
    })

    this.movieService.getMoviesInTeaters().subscribe(data => {
      this.theaters = data
    })

    this.movieService.getKidsMovies().subscribe(data => {
      this.kids = data
    })

    this.movieService.getDramaMovies().subscribe(data => {
      this.dramas = data
    })

  }

}
