import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/_products.service';
import { Productdata } from '../productdata';

@Component({
  selector: 'app-favorit-product',
  templateUrl: './favorit-product.component.html',
  styleUrls: ['./favorit-product.component.css']
})
export class FavoritProductComponent implements OnInit {

  product?: Productdata;
  favl:any[] = [];

  constructor(private productservice: ProductsService) { }

  ngOnInit(): void {
    this.productservice.getproductfav().subscribe((x) => {
      this.product = x;
      console.log(x.title);
      this.favl.push(x.title)
    });
  }

  deletfromcart(_pro:any){

    this.favl.splice(_pro,1);
  }


}
