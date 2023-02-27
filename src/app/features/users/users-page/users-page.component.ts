import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from '../state/user.model';
import { UsersQuery } from '../state/users.query';
import { UsersService } from '../state/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
})
export class UsersPageComponent implements OnInit, OnDestroy {
  users$: Observable<User[]> | undefined;
  isAddingEnabledSubscription: Subscription | undefined;
  addBtnDisabled: boolean = false;
  isModalOpened: boolean = false;

  constructor(
    private usersService: UsersService,
    private userQuery: UsersQuery
  ) {}

  ngOnInit(): void {
    this.usersService.get();
    this.users$ = this.userQuery.selectAll();
    this.isAddingEnabledSubscription =
      this.userQuery.isAddingEnabled$.subscribe((result) => {
        this.addBtnDisabled = !result;
      });
  }

  ngOnDestroy(): void {
    this.isAddingEnabledSubscription?.unsubscribe();
  }

  changeUserStatus(user: User, status: boolean) {
    this.usersService.changeUserStatus(user, status);
  }

  onBtnClick() {
    this.isModalOpened = true;
  }

  closeModal() {
    this.isModalOpened = false;
  }
}
