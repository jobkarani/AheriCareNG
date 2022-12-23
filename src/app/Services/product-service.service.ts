import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../Interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  id:number =0;

  constructor(private http :HttpClient) { }

  getProductDetails(id:number): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>('http://127.0.0.1:8000/getProductDetails/' + id);
  }
}
