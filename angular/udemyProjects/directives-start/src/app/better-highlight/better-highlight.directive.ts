import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string='transparent';
  @Input() highlightColor:string='red';
  @HostBinding('style.backgroundColor') backgorundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgorundColor=this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }


  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgorundColor=this.highlightColor
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
  // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')
    
    this.backgorundColor=this.defaultColor
  }
}
