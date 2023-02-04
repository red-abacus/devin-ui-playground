import { Component } from '@angular/core';

@Component({
  selector: 'layouting-button-grid',
  templateUrl: './grid-button.component.html',
  styleUrls: ['./grid-button.component.scss']
})
export class GridButtonComponent {

  buttonText = "My button"

  onButtonClick() {
    alert("pressed")
  }
}
