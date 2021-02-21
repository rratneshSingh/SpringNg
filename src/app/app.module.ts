import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule ) },
        { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
        { path: 'invalid-url', component: NotFoundComponent },
        { path: '**', redirectTo: 'invalid-url' },
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
