import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { BlogService } from '../shared/services/blog.service';



@NgModule({
  declarations: [HomeComponent, BlogComponent, BlogsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'blog', component: BlogComponent },
        { path: 'blogs', component: BlogsComponent },
      ]
    )
  ]
})
export class PagesModule { }
