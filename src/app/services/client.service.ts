import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DEVELOPER_MODE } from '../definition/developer.config';
import * as API_URLS from '../definition/api-urls';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Client } from '../models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients = new Subject<Client[]>();
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

  openApiGet(apiUrl) {
    return this.http.post<any>(apiUrl, this.httpOptions);
  }

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

  addClient(userData) {
    return this.openApiPost(this.createClientUrl(), userData);
  }

  addFollowup(userData) {
    return this.openApiPost(this.createFollowupUrl(), userData);
  }

  // Minin *********
  onGetClient() {
    this.getClient().subscribe((response) => {
      this.clients.next(response);
    });
  }
  // ****************************
  getClient() {
    return this.openApiGet(this.getClientUrl());
  }

  createClientUrl() {
    if (DEVELOPER_MODE) {
      return '/localapi' + API_URLS.BASE_URL + API_URLS.ADD_CLIENT;
    } else {
      return API_URLS.BASE_URL + API_URLS.ADD_CLIENT;
    }
  }

  createFollowupUrl() {
    if (DEVELOPER_MODE) {
      return '/localapi' + API_URLS.BASE_URL + API_URLS.ADD_FOLLOWUP;
    } else {
      return API_URLS.BASE_URL + API_URLS.ADD_FOLLOWUP;
    }
  }

  getClientUrl() {
    if (DEVELOPER_MODE) {
      return '/localapi' + API_URLS.BASE_URL + API_URLS.LIST_CLIENT;
    } else {
      return API_URLS.BASE_URL + API_URLS.LIST_CLIENT;
    }
  }
}
