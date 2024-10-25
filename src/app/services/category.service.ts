import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private baseUrl = 'https://dummyjson.com/products/categories';

  http = inject(HttpClient);

  getAllCategories() {
    return this.http.get<any[]>(this.baseUrl);
  }
}
