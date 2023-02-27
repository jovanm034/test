import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent {
  @Input() active: boolean = false;
  @Output() stateChanged = new EventEmitter();

  onToggleClick() {
    this.active = !this.active;
    this.stateChanged.emit();
  }
}
