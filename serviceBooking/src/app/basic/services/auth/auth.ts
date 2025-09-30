import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private http: HttpClient) {}

  registerClient(signupRequestDTO: any) {
    return this.http.post(BASIC_URL + 'client/sign-up', signupRequestDTO);
  }

  registerCompany(signupRequestDTO: any) {
    return this.http.post(BASIC_URL + 'company/sign-up', signupRequestDTO);
  }
}
