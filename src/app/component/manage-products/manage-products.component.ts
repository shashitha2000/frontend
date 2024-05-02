import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  products: any[] = [];
  editMode: { [key: string]: boolean } = {};
  editedProductData: { [key: string]: any } = {};

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts().subscribe((response: any) => {
      this.products = response.map((product: any) => ({
        ...product,
        showReview: false
      }));
    });
  }

  deleteProduct(productId: string) {
    this.productService.deleteProduct(productId).subscribe(() => {
      this.fetchProducts();
    });
  }

  updateProduct(productId: string) {
    const updatedProductData = this.editedProductData[productId];
    this.productService.updateProduct(productId, updatedProductData).subscribe(() => {
      this.fetchProducts();
      this.editMode[productId] = false;
    });
  }

  enterEditMode(productId: string, productData: any) {
    this.editMode[productId] = true;
    if (!this.editedProductData[productId]) {
      this.editedProductData[productId] = { ...productData };
    }
  }

  updateEditedProductDescription(productId: string, event: any) {
    if (!this.editedProductData[productId]) {
      this.editedProductData[productId] = { description: '' };
    }
    this.editedProductData[productId].description = event;
  }

  exitEditMode(productId: string) {
    delete this.editedProductData[productId];
    this.editMode[productId] = false;
  }
}