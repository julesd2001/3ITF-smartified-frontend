import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { PresentationComponent } from './presentations/presentation/presentation.component';
import { MatCardModule } from '@angular/material/card';
import { DatasetListComponent } from './datasets/dataset-list/dataset-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
import { GraphFormComponent } from './graph-form/graph-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavService } from './sidenav/sidenav.service';
import { SecurityComponent } from './security/security/security.component';
import { CompaniesModule } from './companies/companies.module';
import { PresentationFormComponent } from './presentations/presentation-form/presentation-form.component';
import { ColorsListComponent } from './colors/colors-list/colors-list.component';
import { ColorsFormComponent } from './colors/colors-form/colors-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavComponent,
    PresentationComponent,
    DatasetListComponent,
    GraphFormComponent,
    SecurityComponent,
    PresentationFormComponent,
    ColorsListComponent,
    ColorsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    UsersModule,
    ReactiveFormsModule,
    FormsModule,
    CompaniesModule
  ],
  providers: [SidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
