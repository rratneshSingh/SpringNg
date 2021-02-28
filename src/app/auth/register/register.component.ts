import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  count = 0;
  constructor( private blogService: BlogService ) { }

  ngOnInit(): void {
    this.count = this.blogService.getCount();
  }

}
