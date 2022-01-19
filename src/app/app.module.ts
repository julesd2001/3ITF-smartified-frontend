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
import { CompanyComponent } from './companies/company/company.component';
import { DatasetListComponent } from './datasets/dataset-list/dataset-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from './users/users.module';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavComponent,
    PresentationComponent,
    CompanyComponent,
    DatasetListComponent,
    
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
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
