import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest, map } from 'rxjs';
import { UsersStore, UsersState } from './users.store';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<UsersState> {
  constructor(protected override store: UsersStore) {
    super(store);
  }

  isAddingEnabled$ = combineLatest([
    this.selectCount(),
    this.selectCount((user) => user.active),
  ]).pipe(
    map((result: [number, number]) => {
      const totalCount = result[0];
      const activeCount = result[1];
      if (totalCount < 5 && totalCount === activeCount) {
        return true;
      }
      return false;
    })
  );
}
