import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Company } from '../company';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpClient: HttpClient) { }

  getAllCompanies(): Observable<Company[]>{
      return this.httpClient.get<Company[]>(GlobalConstants.apiURL + "/company");
  }

  getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>(GlobalConstants.apiURL + "/company/" + id)
  }

  postCompany(company: Company): Observable<Company> {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=utf-8");
    return this.httpClient.post<Company>(GlobalConstants.apiURL + "/company", company, {headers: headers});
  }

  updateCompany(id: number, company: Company): Observable<Company> {
    let headers = new HttpHeaders();
    headers = headers.set("Content-Type", "application/json; charset=utf-8");
    return this.httpClient.put<Company>(GlobalConstants.apiURL + "/company/" + id, company, {headers: headers});
  }

  deleteCompany(id: number): Observable<Company> {
    return this.httpClient.delete<Company>(GlobalConstants.apiURL + "/company/" + id);
  }



}
