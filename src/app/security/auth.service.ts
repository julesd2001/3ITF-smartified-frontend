import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalConstants } from '../shared/global-constants';
import { User } from './user';
import { UserResponse } from './userResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // getToken(): string {
  //   return localStorage.getItem('token') ?? '';
  // }

  // getUser(): User | null {
  //   if (this.isLoggedIn()){
  //     return { id : parseInt(localStorage.getItem('id') ?? '0') ,
  //       firstname: localStorage.getItem("firstname") ?? "",
  //       lastname: localStorage.getItem("lastname") ?? "",
  //       email: localStorage.getItem('email') ?? '', password: '',
  //       isAdmin:localStorage.getItem('isAdmin')=='true',
  //       token: this.getToken()   };
  //   } else {
  //     return null;
  //   }
  // }
  // getRole() {
  //   return localStorage.getItem('role');
  // }

  // logout(): void {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('id');
  //   localStorage.removeItem('role')
  //   localStorage.removeItem('customerId');
  // }

  // login(result:UserResponse){
  //   // save access token localstorage
  //   localStorage.setItem('token', result.token);
  //   localStorage.setItem('id', result.id.toString());
  //   localStorage.setItem('email', result.email);
  //   result.isSuperAdmin?localStorage.setItem('role','superadmin'):(result.isAdmin?localStorage.setItem('role','admin'):'')
  // }

  // isLoggedIn(): boolean {
  //   return !!localStorage.getItem('token');
  // }

  // authenticate(email: string,password:string, firstName:string): Observable<UserResponse> {
  //   return this.httpClient.post<UserResponse>(GlobalConstants.apiURL+'api/Users/authenticate', {email, password, firstName});
  // }

  // registerUser(email: string,password:string, firstName:string, lastName:string ,isActive:boolean): Observable<UserResponse> {
  //   return this.httpClient.post<UserResponse>(GlobalConstants.apiURL+'api/Users', {firstName,lastName,email,password,isActive});
  // }
}
