import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { loginURL } from '../global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDashboardService {
  constructor(private http: HttpClient) {}

  headers = new HttpHeaders({
    Apikey: 'GqH14tLmLb',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': ' Content-Type',
    Accept: 'application/json',
  });

  //   header('Access-Control-Allow-Origin: *');

  // header('Access-Control-Allow-Methods: GET, POST');

  // header("Access-Control-Allow-Headers: X-Requested-With");

  // postData(payload: any) {
  //   return this.http.post<any>(`${loginURL}`, payload, {
  //     headers: this.headers,
  //   });

  postData(payload: any) {
    return this.http.post(`${loginURL}`, payload);
  }
}
// }
