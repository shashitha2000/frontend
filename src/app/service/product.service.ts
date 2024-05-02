import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getAllProducts() {
    return this.http.get('http://localhost:8080/api/v1/products/get-all-products');
  }
  deleteProduct(productId: string) {
    return this.http.delete(`http://localhost:8080/api/v1/products/delete-product/${productId}`);
  }

  updateProduct(productId: string, productData: any) {
    return this.http.put(`http://localhost:8080/api/v1/products/update/${productId}`, productData);
  }
}
