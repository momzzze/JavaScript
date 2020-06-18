import { Component, OnInit } from '@angular/core';
import { AccauntsService } from './accaunts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  accaunts: { name: string, status: string }[] = [];

  constructor(private accauntService: AccauntsService) { }

  ngOnInit(){
    this.accaunts = this.accauntService.accounts;
  }

}
