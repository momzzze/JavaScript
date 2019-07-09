import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../models/furniture';

const   createF="http://localhost:5000/furniture/create";


@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  constructor(private http:HttpClient) { }

  createFurniture(data){
    return this.http.post(createF,data);
  }
}
