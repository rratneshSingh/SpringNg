import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [ SignUpComponent, HighlightDirective ],
  imports: [
    CommonModule
  ],
  exports: [ SignUpComponent, HighlightDirective ]
})
export class SharedModule { }
