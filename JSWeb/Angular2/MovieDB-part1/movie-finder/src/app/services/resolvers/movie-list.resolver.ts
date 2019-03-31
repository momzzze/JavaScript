import { Injectable } from "@angular/core";

import {merge} from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { MovieService } from "../movie.service";
import Movie from "../../models/Movie";



@Injectable()

export class MovieListResolver implements Resolve<Movie[]>{

    constructor(
        private movieService:MovieService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        return merge(
            this.movieService.getInTheaterMovies(),
            this.movieService.getBestDramaMovies(),
            this.movieService.getPopularKidsMovies(),
            this.movieService.getPopularMovies()
        ) 
    }

}