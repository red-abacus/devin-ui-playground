import {Component, EventEmitter, HostBinding, HostListener, Input, Output} from '@angular/core';

@Component({
  selector: 'my-state-button',
  templateUrl: './my-state-button.component.html',
  styleUrls: ['./my-state-button.component.scss']
})
export class MyStateButtonComponent {

  @Input() name = "";
  @Output() myEvent = new EventEmitter<any>;

  @HostBinding('class') myClass = "";

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: any) {
    this.myClass = "hover";
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: any) {
    this.myClass = "";
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: any) {
    this.myClass = "pressed";
  }

  @HostListener('mouseup', ['$event'])
  onMouseUp(event: any) {
    this.myClass = "";
  }
}
