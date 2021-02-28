import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  count = 0;

  constructor(
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    this.count = this.blogService.getCount();
  }

}
