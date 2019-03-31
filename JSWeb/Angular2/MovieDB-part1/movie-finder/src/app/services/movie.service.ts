import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

import Movie from "../models/Movie";
import MovieDetails from "../models/MovieDetails";

const BASE_URL = "https://api.themoviedb.org/3/movie";
const In_THEATERS = "https://api.themoviedb.org/3/discover/movie";
const API_KEY = "?api_key=4578e61ba915f86954d529ef233b7281";

const API_KEY1 = "&api_key=4578e61ba915f86954d529ef233b7281";
const KIDS ="discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
const BASEURL = "https://api.themoviedb.org/3/";
const DRAMA = "discover/movie?with_genres=18&primary_release_year=2018";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Movie[]>(BASE_URL + "/popular" + API_KEY)
      .pipe(map(data => data["results"].slice(0, 6)));
  }

  getInTheaterMovies(): Observable<Array<Movie>> {
    return this.http
      .get<Movie[]>(In_THEATERS + API_KEY + "&with_release_type=2|3")
      .pipe(map(data => data["results"].slice(6, 12)));
  }

  getPopularKidsMovies() {
    return this.http
      .get<Movie[]>(BASEURL + KIDS + API_KEY1)
      .pipe(map(data => data["results"].slice(0, 6)));
  }
  getBestDramaMovies() {
    return this.http
      .get<Movie[]>(BASEURL + DRAMA + API_KEY1)
      .pipe(map(data => data["results"].slice(0, 6)));
  }
  getMovies(url:string){
    return this.http.get<Movie[]>(url).pipe(map(data => data["results"].slice(0, 6)))
  }
  getMovieById(id:string){
    return this.http.get<MovieDetails>(BASEURL+`movie/${id}`+API_KEY);
    
  }
  searchMovie(query:string){
    return this.http.get<Movie[]>(BASEURL+'search/movie'+API_KEY+`&query=${query}`);
  }
}
