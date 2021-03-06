import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompaniesFormComponent } from './companies/companies-form/companies-form.component';
import { CompanyComponent } from './companies/company/company.component';
import { DatasetListComponent } from './datasets/dataset-list/dataset-list.component';
import { PresentationComponent } from './presentations/presentation/presentation.component';
import { UserlistComponent } from './users/userList/userlist/userlist.component';

const routes: Routes = [
    {path: "presentation", component: PresentationComponent},
    {path: "companies", component: CompanyComponent},
    {path: "users", component: UserlistComponent},
    {path: "datasets", component: DatasetListComponent},
    {path: "companies/form", component: CompaniesFormComponent},
    {path: "companies/form/:id", component: CompaniesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
