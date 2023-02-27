import { Component, EventEmitter, Output } from '@angular/core';
import { UsersService } from '../../state/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  @Output() modalClosed = new EventEmitter();

  constructor(private usersService: UsersService) {}

  addUser(name: string) {
    this.usersService.addUser(name);
    this.closeModal();
  }

  closeModal() {
    this.modalClosed.emit();
  }
}
