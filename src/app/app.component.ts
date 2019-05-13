import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Xello-FE';

  toolTipA:boolean = false;
  toolTipB:boolean = false;

  tooltipContentA:string = "Tooltip content for A";
  tooltipContentB:string = "Tooltip content for B";

  setTooltipDisplay(event, showTooltipA, showTooltipB){
    this.toolTipA = showTooltipA;
    this.toolTipB = showTooltipB;
    event.stopPropagation();
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleDeleteKeyboardEvent(event: KeyboardEvent) {
    this.setTooltipDisplay(event, false, false);
  }

}
