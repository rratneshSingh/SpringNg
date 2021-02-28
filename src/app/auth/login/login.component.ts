import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  count = 0;

  constructor( private blogService:BlogService) { }

  ngOnInit(): void {
    this.count = this.blogService.getCount();
  }

  getCount() {
    this.count = this.blogService.getCount();
  }

  setCount( value) {
    this.blogService.setCount( value );
  }

}
