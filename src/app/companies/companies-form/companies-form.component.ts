import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Company } from '../company';
import { CompanyService } from '../company/company.service';

@Component({
  selector: 'app-companies-form',
  templateUrl: './companies-form.component.html',
  styleUrls: ['./companies-form.component.scss']
})
export class CompaniesFormComponent implements OnInit, OnDestroy {

  isAdd: boolean = false;
  isEdit: boolean = false;

  companyId: number = 0;

  isSubmitted: boolean = false;
  errorMessage: string = "";

  company$: Subscription = new Subscription();
  postCompany$: Subscription = new Subscription();
  putCompany$: Subscription = new Subscription();

  company: Company = {id: 0, name: "", logo: "", primaryColor: "", secondaryColor: ""}

  constructor(private router: Router, private companyService: CompanyService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === "add";
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === "edit";
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
      this.company$.unsubscribe();
      this.postCompany$.unsubscribe();
      this.putCompany$.unsubscribe();
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postCompany$ = this.companyService.postCompany(this.company).subscribe(result => {
        this.router.navigateByUrl("/companies")
      },
      error => {
        this.errorMessage = error.message;
      })
    }

    if (this.isEdit) {
      this.putCompany$ = this.companyService.updateCompany(this.companyId, this.company).subscribe(result => {
        this.router.navigateByUrl("/companies")
      },
      error => {
        this.errorMessage = error.message;
      })
    }
  }



}
