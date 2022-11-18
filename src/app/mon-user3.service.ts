import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { MonUser3 } from './MonUser3';

@Injectable({
  providedIn: 'root'
})

export class MonUser3Service {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<MonUser3[]> {
    return this.http.get<MonUser3[]>(this.usersUrl);
  }

  public save(user: MonUser3) {
    return this.http.post<MonUser3>(this.usersUrl, user);
  }
}
