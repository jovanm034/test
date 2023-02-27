import { NgModule } from '@angular/core';
import { UsersPageComponent } from './users-page/users-page.component';
import { UsersService } from './state/users.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUserComponent } from './users-page/add-user/add-user.component';

@NgModule({
  declarations: [UsersPageComponent, AddUserComponent],
  imports: [SharedModule],
  exports: [UsersPageComponent, AddUserComponent],
  providers: [UsersService],
})
export class UsersModule {}
