import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Presentation } from '../presentation/presentation';
import { PresentationService } from '../presentation/presentation.service';

@Component({
  selector: 'app-presentation-form',
  templateUrl: './presentation-form.component.html',
  styleUrls: ['./presentation-form.component.scss']
})
export class PresentationFormComponent implements OnInit {

  isAdd: boolean = false;
  isEdit: boolean = false;

  isSubmitted: boolean = false;

  presentationId: number = 0;

  errorMessage: string = "";

  presentations$: Subscription = new Subscription();

  presentation: Presentation = {id: 0, title: "", length: "", bannerImage: "", date: new Date(), description: "", isFavorite: false};

  presentation$: Subscription = new Subscription(); 
  postPresentation$: Subscription = new Subscription();
  putPresentation$: Subscription = new Subscription();

  constructor(private router: Router, private presentationService: PresentationService) {
    this.isAdd = this.router.getCurrentNavigation()?.extras.state?.mode === "add";
    this.isEdit = this.router.getCurrentNavigation()?.extras.state?.mode === "edit";
   }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.isAdd) {
      this.postPresentation$ = this.presentationService.postNewPresentation(this.presentation).subscribe(result => {
        this.router.navigateByUrl("/presentations")
      },
      error => {
        this.errorMessage = error.message;
      })
    }
    if (this.isEdit) {
     this.putPresentation$ = this.presentationService.editPresentation(this.presentationId, this.presentation).subscribe(result => {
        this.router.navigateByUrl("/presentations");

      },
      error => {
        this.errorMessage = error.message;
      })
    }

  }


}
