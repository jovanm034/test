import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Output() buttonClicked = new EventEmitter();

  onButtonClick() {
    if (this.disabled) {
      return;
    }
    this.buttonClicked.emit();
  }
}
