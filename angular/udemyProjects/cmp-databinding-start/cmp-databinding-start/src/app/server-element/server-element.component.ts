import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() {
    console.log('constructor called')
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called')
    console.log(changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log('text content: '+this.header.nativeElement.textContent)
  }

}
