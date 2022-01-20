import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Presentation } from './presentation';
import { PresentationService } from './presentation.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {

  presentations: Presentation[] = [];
  presentations$: Subscription = new Subscription();

  presentation: Presentation = {id: 0, title: "", description: "", date: new Date(), bannerImage: "", isFavorite: false, length: ""}

  constructor(private presentationService: PresentationService) { }

  ngOnInit(): void {
    this.getPresentations();
  }

  getPresentations() {
    this.presentations$ = this.presentationService.getAllPresentations().subscribe(result => {
      this.presentations = result;
      console.log(result);
    })
  }

}
