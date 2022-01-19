import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { PresentationComponent } from './presentation.component';


@NgModule({
  declarations: [
    PresentationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PresentationModule { }
