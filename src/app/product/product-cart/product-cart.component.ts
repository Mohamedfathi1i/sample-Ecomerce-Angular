import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_products.service';
import { Productdata } from '../productdata';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css'],
})
export class ProductCartComponent implements OnInit {
  product?: Productdata;
  cartl: any[] = [];

  constructor(private productservice: ProductsService) {}

  ngOnInit(): void {
    this.productservice.getproductdetail().subscribe((x) => {
      this.product = x;
      console.log(x.title);
      this.cartl.push(x.title);
    });
  }

  deletfromcart(_pro: any) {
    this.cartl.splice(_pro, 1);
  }
}
