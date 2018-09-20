import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

const apiKey: string = '4578e61ba915f86954d529ef233b7281'


@Injectable()

export class MovieService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    theaters: string='discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22'
    authentication: string = '&api_key=';
    constructor(private http: HttpClient) { }

    getPopular():Observable<Movies> {
        return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`)
    }
    getMoviesInTeaters():Observable<Movies>{
        return this.http.get<Movies>(`${this.path}${this.theaters}${this.authentication}${apiKey}`)
    }
}