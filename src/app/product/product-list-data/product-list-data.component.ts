import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from 'src/app/_products.service';
import { Productdata } from '../productdata';

@Component({
  selector: 'app-product-list-data',
  templateUrl: './product-list-data.component.html',
  styleUrls: ['./product-list-data.component.css'],
})
export class ProductListDataComponent implements OnInit {
  constructor(private productserv: ProductsService) {}
  @Output() selectedProductl = new EventEmitter<Productdata>();

  produvtlist?: Productdata[];
  products?: Productdata; 

  ngOnInit(): void {
    this.produvtlist = this.productserv.getAllProduct();
  }

  getSelectedproduc(event: any) {
    this.products = event;
    this.selectedProductl.emit(this.products);

  }


  

}
