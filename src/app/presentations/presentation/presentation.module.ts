import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { PresentationComponent } from './presentation.component';
import { PresentationFormComponent } from '../presentation-form/presentation-form.component';


@NgModule({
  declarations: [
    PresentationComponent,
    PresentationFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ]
})
export class PresentationModule { }
