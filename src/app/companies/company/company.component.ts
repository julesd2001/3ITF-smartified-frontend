import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidenavService } from 'src/app/sidenav/sidenav.service';
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

  putCompany$: Subscription = new Subscription();
  postCompany$: Subscription = new Subscription();
  deleteCompany$: Subscription = new Subscription();
  
  company: Company = {id: 0, name: "", logo: "", primaryColor: "", secondaryColor: ""};

  constructor(private companyService: CompanyService, private sidenav: SidenavService, private router: Router) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies() {
    this.companies$ = this.companyService.getAllCompanies().subscribe(result => {
        this.companies = result;
    })
  }

  toggleRightSidenav() {
    this.sidenav.toggle();
  }

  add() {
    this.router.navigate(['companies/form'], {state: {mode: "add"}})
  }

  edit(id: number) {
    this.router.navigate(["companies/form/" + id], {state: {id: id, mode: "edit"}})
  }

  delete(id: number) {
    if(confirm("Bent u zeker dat u dit bedrijf uit het systeem wilt verwijderen?")) {
        this.deleteCompany$ = this.companyService.deleteCompany(id).subscribe(result => {
          this.getCompanies();
        })
    }
  }





}
