import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserformComponent } from './userForm/userform/userform.component';
import { UserlistComponent } from './userList/userlist/userlist.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    UserformComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class UsersModule { }
