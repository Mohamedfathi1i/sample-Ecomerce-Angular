import { ProductsService } from './../../_products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';



@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  myform = new FormGroup({

    id: new FormControl('',[Validators.required ,Validators.minLength(1)]),
    title: new FormControl('',[Validators.required ,Validators.minLength(5)]),
    image: new FormControl('',[Validators.required ,Validators.maxLength(500)]),
    description: new FormControl('',[Validators.required ,Validators.minLength(20)]),
    price: new FormControl('',[Validators.required ,Validators.minLength(1)]),
    rating: new FormControl('',[Validators.required ,Validators.minLength(1)]),
    category: new FormControl('',[Validators.required ,Validators.minLength(5)]),


  });
  get id() { return this.myform.get('id') as FormControl; }
  get title() { return this.myform.get('title') as FormControl; }
  get description() { return this.myform.get('description') as FormControl; }
  get image() { return this.myform.get('image') as FormControl; }
  get price() { return this.myform.get('price') as FormControl; }
  get rating() { return this.myform.get('rating') as FormControl; }
  get category() { return this.myform.get('category') as FormControl; }




  constructor( private _ProductsService:ProductsService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.myform.value);

    this._ProductsService.addNewProduct(this.myform.value);
    alert("Added")
  }



}
