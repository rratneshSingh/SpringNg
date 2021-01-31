import { Component } from '@angular/core';
import {
  DomSanitizer
} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BMICalc';
  url = 'http://raivens.com/wp-content/uploads/2016/08/Dummy-image.jpg';
  classes = "c1 c2"
  isC1 = true;
  isC2 = true;
  styles = "color: red;"
  bgColor = "red";
  arrayItems = [ 'bmw', 'maruti', 'ferrari'];
  isSubmit = false;

  changeColor( value ) {
    
  }
  
  showBgColorVaribaleValue() {
    console.log(this.bgColor);
  }

  getInput( event ) {
    console.log( event );
  }

  show( value ){
    this.isSubmit = true;
    console.log( value );
  }

  constructor(public sanitization:DomSanitizer){
  }
}
