import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyA1F3P0MnFk7FkgL4FRc15RHxwau5FmQIE",
      authDomain: "recipes-c9302.firebaseapp.com",
    })
  }

}
