import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import * as fromComponents from './components';

@NgModule({
  declarations: [...fromComponents.components],
  imports: [CommonModule, FormsModule, BrowserModule],
  exports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ...fromComponents.components,
  ],
})
export class SharedModule {}
