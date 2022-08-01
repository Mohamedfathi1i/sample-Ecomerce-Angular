import { ProductsService } from 'src/app/_products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Productdata } from '../productdata';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Productdata;
  productid: number = 0;

  constructor(
    private activrou: ActivatedRoute,
    private productserv: ProductsService
  ) {}
  ngOnInit(): void {
    this.activrou.params.subscribe((x) => {
      this.productid = x['id'];
      this.product = this.productserv.getProductById(this.productid);
    });
  }
}
