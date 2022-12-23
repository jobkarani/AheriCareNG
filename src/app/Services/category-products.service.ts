import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoryproducts } from '../Interfaces/categoryproducts';

@Injectable({
  providedIn: 'root'
})
export class CategoryProductsService {

  id:number =0;

  constructor(private http :HttpClient) { }

  getCategoryProducts(id:number): Observable<Categoryproducts[]> {
    return this.http.get<Categoryproducts[]>('http://127.0.0.1:8000/api_categoryproducts/' + id);
  }
}
