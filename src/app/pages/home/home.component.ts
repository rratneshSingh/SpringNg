import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private blogService: BlogService
  ) { }

  data = 10 / 3;
  count = 0;
  text = 'Transforms a number to a percentage string, formatted according to locale rules that determine group sizing and separator, decimal-point character, and other locale-specific configurations.'

  ngOnInit(): void {
  }

  getCount() {
    this.count = this.blogService.getCount();
  }

  setCount( value) {
    this.blogService.setCount( value );
  }

}
