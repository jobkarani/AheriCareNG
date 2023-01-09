import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blogs-list/blogs-list.component';
import { BlogsRoutingModule } from './blogs-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BlogsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BlogsRoutingModule,
  ]
})
export class BlogsModule { }
