import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  count = 1;

  getCount(){
    return this.count;
  }

  setCount( value ) {
    this.count = value;
  }
}
