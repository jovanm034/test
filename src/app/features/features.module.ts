import { NgModule } from '@angular/core';
import { UsersModule } from './users/users.module';
import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  imports: [FeaturesRoutingModule],
  providers: [UsersModule],
  exports: [UsersModule],
})
export class FeaturesModule {}
