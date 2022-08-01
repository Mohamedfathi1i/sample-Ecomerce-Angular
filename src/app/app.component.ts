import { Productdata } from './product/productdata';
import { Component } from '@angular/core';
import { ProductsService } from './_products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'shop';
  product?: Productdata;
  productsall?: Productdata; 


  constructor(private productservice: ProductsService) {}

  ngOnInit(): void {
    this.productservice.getproductdetail().subscribe((x) => {
      this.product = x;
    });
  }

  getSelectedproducall(event: any) {
    this.productsall = event;
    console.log("momo");
  }

}
