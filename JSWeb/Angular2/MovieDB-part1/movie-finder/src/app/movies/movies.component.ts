import { Component, OnInit ,OnDestroy} from "@angular/core";
import { MovieService } from "../services/movie.service";
import Movie from "../models/Movie";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit, OnDestroy {
  popularMovies: Movie[];
  inTheaterMovies: Movie[];
  popularKids:Movie[];
  dramaFilms:Movie[]
  singleMovie: Movie;
  popularMoviesSub:Subscription;

  constructor(
    private moviesService: MovieService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {

   this.popularMoviesSub=this.moviesService.getPopularMovies().subscribe(data => {
      this.popularMovies = data;
    });
    this.popularMoviesSub=this.moviesService.getInTheaterMovies().subscribe(data => {
      this.inTheaterMovies = data;
    });
    this.popularMoviesSub=this.moviesService.getPopularKidsMovies().subscribe(data=>{
      this.popularKids=data;
    });
    this.popularMoviesSub=this.moviesService.getBestDramaMovies().subscribe(data=>{
      this.dramaFilms=data;
    });
  }
  ngOnDestroy(){
    this.popularMoviesSub.unsubscribe();
  }
}
