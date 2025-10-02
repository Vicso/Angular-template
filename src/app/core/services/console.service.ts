import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Console } from '../models/console.model';

@Injectable({
  providedIn: 'root'
})
export class ConsoleService {
  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getConsoles(): Observable<Console[]> {
    return this.http.get<Console[]>(`${this.baseUrl}consoles`);
  }

  getConsole(id: string): Observable<Console> {
    return this.http.get<Console>(`${this.baseUrl}console/${id}`);
  }

  createConsole(console: any, id: string): Observable<Console> {
  return this.http.post<Console>(`${this.baseUrl}console/${id}`, console);
  }

  updateConsole(console: any, id: string): Observable<Console> {
  return this.http.put<Console>(`${this.baseUrl}console/${id}`, console);
  }

  deleteConsole(id: string): Observable<Console> {
  return this.http.delete<Console>(`${this.baseUrl}console/${id}`);
  }
}
