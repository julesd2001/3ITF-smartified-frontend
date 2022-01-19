import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    CompanyComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class CompaniesModule { }
