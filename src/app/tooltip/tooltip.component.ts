import {Component, OnInit, Input, HostListener, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {
  @ViewChild('TooltipRef') tooltip: ElementRef;
  //the distance between top of the tooltip and the upper edge
  distToEdge:number = 0;

  // the distance of the top of the tooltip and the top of the page
  topMargin:number = Number.POSITIVE_INFINITY;

  @Input() toolTipText: string;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  doSomething() {
    let tooltipTop = this.tooltip.nativeElement.getBoundingClientRect().top;
    let tmp = tooltipTop+window.scrollY;
    if(this.topMargin >= tmp || window.scrollY <= this.topMargin){
      this.distToEdge = tooltipTop;
      this.topMargin = tmp;
    }
  }

}
