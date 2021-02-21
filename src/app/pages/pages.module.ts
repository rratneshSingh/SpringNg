import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HomeComponent, BlogComponent, BlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'blogs', component: BlogsComponent },
      ]
    )
  ]
})
export class PagesModule { }
