import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Presentation } from './presentation';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {

  constructor(private httpClient: HttpClient) {

   }

   
   getAllPresentations(): Observable<Presentation[]> {
     return this.httpClient.get<Presentation[]>(GlobalConstants.apiURL + "/presentation");
   }

   getPresentationById(id: number): Observable<Presentation> {
     return this.httpClient.get<Presentation>(GlobalConstants.apiURL + "/presentation/" + id);
   }

   postNewPresentation(presentation: Presentation): Observable<Presentation> {
     let headers = new HttpHeaders();
     headers = headers.set("Content-Type", "application/json; charset=utf-8");

     return this.httpClient.post<Presentation>(GlobalConstants.apiURL + "/presentation", presentation, {headers: headers})
   }

   editPresentation(id: number, presentation: Presentation): Observable<Presentation> {
     let headers = new HttpHeaders();
     headers = headers.set("Content-Type", "application/json; charset=utf-8");

     return this.httpClient.put<Presentation>(GlobalConstants.apiURL + "/presentation/" + id, presentation, {headers: headers});
   }

   deletePresentation(id: number) {
     return this.httpClient.delete<Presentation>(GlobalConstants.apiURL + "/presentation/" + id);
   }

   
}
