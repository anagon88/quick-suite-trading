import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TableListComponent
  ],
  exports: [
    TableListComponent
  ]
})
export class ComponentsModule { }
