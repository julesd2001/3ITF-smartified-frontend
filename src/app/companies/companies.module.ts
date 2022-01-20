import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { MatCardModule } from '@angular/material/card';
import { CompaniesFormComponent } from './companies-form/companies-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CompanyComponent,
    CompaniesFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CompaniesModule { }
