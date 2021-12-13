import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


//const API_URL = 'http://ec2-54-89-183-177.compute-1.amazonaws.com:8080/revcare/api/test/';
const API_URL =  'http://localhost:8080/users'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  // private springServerUrl= environment.baseUrl;

  constructor(private http: HttpClient) { }
  getAllAccounts(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  
}

