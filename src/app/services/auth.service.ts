import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEVELOPER_MODE } from '../definition/developer.config';
import * as API_URLS from '../definition/api-urls';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  headerObj = new HttpHeaders();

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  openApiGet() {}

  closedApiGet(apiUrl) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        auth_token: localStorage.getItem('auth_token')
      })
    };
    return this.http.get<any>(apiUrl, httpOptions);
  }

  openApiPost(apiUrl, postData) {
    return this.http.post<any>(apiUrl, JSON.stringify(postData), this.httpOptions);
  }

  closedApiPost(apiUrl, postData) {
    // this.setAuthHeaders(localStorage.getItem('auth_token'));
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        auth_token: localStorage.getItem('auth_token')
      })
    };
    return this.http.post<any>(apiUrl, JSON.stringify(postData), httpOptions);
  }

  userSignUp(userData) {
    return this.openApiPost(this.createUserUrl(), userData);
  }

  userLogin(userData) {
    console.log(userData);
    return this.openApiPost(this.createLoginUrl(), userData);
  }

  verifyEmail(userData) {
    console.log(userData);
    return this.openApiPost(this.createVerifyEmailUrl(), userData);
  }

  resetPwd(userData) {
    console.log(userData);
    return this.openApiPost(this.createResetPwdUrl(), userData);
  }

  createUserUrl() {
    if (DEVELOPER_MODE) {
      return '/localapi' + API_URLS.BASE_URL + API_URLS.USER_CREATE;
    } else {
      return API_URLS.BASE_URL + API_URLS.USER_CREATE;
    }
  }

  createLoginUrl() {
    if (DEVELOPER_MODE) {
      return '/localapi' + API_URLS.BASE_URL + API_URLS.LOGIN;
    } else {
      return API_URLS.BASE_URL + API_URLS.LOGIN;
    }
  }

  createVerifyEmailUrl() {
    if (DEVELOPER_MODE) {
      return '/localapi' + API_URLS.BASE_URL + API_URLS.VERIFY_EMAIL;
    } else {
      return API_URLS.BASE_URL + API_URLS.VERIFY_EMAIL;
    }
  }

  createResetPwdUrl() {
    if (DEVELOPER_MODE) {
      return '/localapi' + API_URLS.BASE_URL + API_URLS.RESET_PWD;
    } else {
      return API_URLS.BASE_URL + API_URLS.RESET_PWD;
    }
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
  }
}
