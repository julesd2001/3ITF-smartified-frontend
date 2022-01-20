import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { AuthService } from './auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    SecurityComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
  ]
})
export class SecurityModule { }
