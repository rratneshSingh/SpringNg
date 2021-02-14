import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: HomeComponent  },
        { path: 'login', component: LoginComponent },
        { path: 'about', component: AboutComponent }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
