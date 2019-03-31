import { Component, OnInit, ViewChild } from "@angular/core";
import Movie from "../models/Movie";
import { MovieService } from "../services/movie.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"]
})
export class LandingComponent implements OnInit {
  @ViewChild("f") searchForm: NgForm;
  searchedMovies: Movie[];
  constructor(
    private movieService:MovieService
  ) {}

  ngOnInit() {}

  search() {
    const query=this.searchForm.value.query;
    this.movieService.searchMovie(query).subscribe((data)=>{
      this.searchedMovies=data['results'];
    })
    
  }
}
