import { Component } from '@angular/core';

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

  changeColor( value ) {
    
  }
  
  showBgColorVaribaleValue() {
    console.log(this.bgColor);
  }

  getInput( event ) {
    console.log( event );
  }
}
