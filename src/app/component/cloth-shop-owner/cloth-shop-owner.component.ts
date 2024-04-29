import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cloth-shop-owner',
  templateUrl: './cloth-shop-owner.component.html',
  styleUrls: ['./cloth-shop-owner.component.css']
})
export class ClothShopOwnerComponent {
  constructor(private http: HttpClient) { }

  submitForm(productForm: NgForm) {
    if (productForm.valid) {
      const productData = {
        id: 0,
        productName: productForm.value.productName,
        description: productForm.value.description,
        price: productForm.value.price,
        imageUrl: productForm.value.imageUrl
      };
  
      this.http.post('http://localhost:8080/api/v1/products/post-product', productData)
        .subscribe(response => {
          console.log('Product added successfully', response);
          // Reset the form
          productForm.resetForm();
        }, error => {
          console.error('Error adding product:', error);
        });
    }
  }
}