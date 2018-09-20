import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';

import {HttpClientModule} from '@angular/common/http'
import { MovieService } from './services/movies.service';
import {RouterModule, Route} from '@angular/router'
import { SelectedMovieComponent } from './selected-movie/selected-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    SelectedMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:MoviesComponent},
      {path:'movie/:id',component:SelectedMovieComponent}
    ])
  ],
  providers: [ MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
