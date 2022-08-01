import { Component, OnInit } from '@angular/core';
import { ImgsService } from './imgs.service';

@Component({
  selector: 'app-imgs',
  templateUrl: './imgs.component.html',
  styleUrls: ['./imgs.component.css']
})
export class ImgsComponent implements OnInit {
imgs:any;
  constructor(private _ImgsService:ImgsService) { }

  ngOnInit(): void {

    this._ImgsService.getImgs().subscribe((imgs)=> this.imgs =imgs)

  }

}
