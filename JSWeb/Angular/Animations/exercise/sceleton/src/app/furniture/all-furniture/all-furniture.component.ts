import { Component, OnInit } from '@angular/core';
import { FurnitureService } from '../furniture.service';
import { FurnitureModel } from '../models/furniture';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-all-furniture',
  templateUrl: './all-furniture.component.html',
  styleUrls: ['./all-furniture.component.css']
})
export class AllFurnitureComponent implements OnInit {
  furnitures: Observable<FurnitureModel[]>;
  constructor(private furnitureService: FurnitureService) { }

  ngOnInit() {
    this.furnitures = this.furnitureService.getAllFurnitures()
  }

}
