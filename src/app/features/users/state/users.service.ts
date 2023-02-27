import { Injectable } from '@angular/core';
import { createUser, User } from './user.model';
import { UsersStore } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private usersStore: UsersStore) {}

  get() {
    this.usersStore.add([
      createUser({ name: 'User 1' }),
      createUser({ name: 'User 2' }),
    ]);
  }

  addUser(name: string) {
    this.usersStore.add(createUser({ name: name }));
  }

  changeUserStatus(user: User, status: boolean) {
    const updatedUser = {
      ...user,
      active: status,
    };
    this.usersStore.update(({ id }) => id === user.id, updatedUser);
  }

  updateUser(user: Partial<User>) {
    this.usersStore.update(user);
  }
}
