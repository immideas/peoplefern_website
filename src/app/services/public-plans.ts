import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PublicPlansService {

  private apiUrl = environment.URl + '/plans';

  constructor(private http: HttpClient) {}

  getPublicPricingPlans(): Observable<any> {

    return this.http.post<any>(
      `${this.apiUrl}/public-pricing`,
      {}
    );
  }
}