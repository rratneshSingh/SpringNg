import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Input() a;

  constructor() { 
    console.log(this.a);
  }

  ngOnInit(): void {
    console.log(this.a);
  }

}
