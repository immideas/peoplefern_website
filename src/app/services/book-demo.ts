import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class BookDemoService {

  private apiUrl = environment.URl + '/book-demo';

  constructor(private http: HttpClient) {}

  createDemo(data: any): Observable<any> {
    return this.http.post<any>(
      `${this.apiUrl}/create`,
      data
    );
  }

}