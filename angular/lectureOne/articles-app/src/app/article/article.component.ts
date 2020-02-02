import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  symbols = 250;

  @Input() article: Article;

  visibleDescriptionLength: number = 0;
  showImage = true;
  imageButtontitle: string = "Show Image"

  get hasNoMoreInfo() {
    return this.description.length < this.visibleDescriptionLength;
  }
  get description() {
    return this.article.description.slice(0, this.visibleDescriptionLength);
  }

  constructor() {

  }
  readMore() {
    if (this.description.length < this.visibleDescriptionLength) {
      return;
    }
    this.visibleDescriptionLength = this.visibleDescriptionLength + this.symbols;
  }


  hideDescription() {
    this.visibleDescriptionLength = 0;
  }

  toggleImage() {
    this.showImage = !this.showImage;

  }

  ngOnInit() {
  }





}
