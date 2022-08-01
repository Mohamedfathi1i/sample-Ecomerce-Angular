import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ImgsService {

  constructor(private _HttpClient:HttpClient) { }


  getImgs(): Observable<any> {
    return this._HttpClient.get('https://jsonplaceholder.typicode.com/albums/1/photos');
  }
}
