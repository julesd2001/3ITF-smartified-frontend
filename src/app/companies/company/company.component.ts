import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Company } from '../company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  companies: Company[] = [];
  companies$: Subscription = new Subscription();

  company: Company = {id: 0, name: "", logo: "", primaryColor: "", secondaryColor: ""};

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getAllCompanies().subscribe(result => {
        this.companies = result;
    })
  }





}
