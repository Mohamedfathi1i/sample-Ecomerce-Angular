import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/_products.service';
import { Productdata } from '../productdata';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() productdetail!: Productdata;
  @Output() selectedProduct = new EventEmitter<Productdata>();
  constructor(private productservic: ProductsService) {}

  ngOnInit(): void {}

  onSelectProduct() {
    this.selectedProduct.emit(this.productdetail);
  }

  sendproduct() {
    this.productservic.addproductdetail(this.productdetail);
  }
  
  sendfavproduct() {
    this.productservic.addproductfav(this.productdetail);
  }
}
