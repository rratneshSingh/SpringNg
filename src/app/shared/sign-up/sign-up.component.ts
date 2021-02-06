import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Input() data;
  @Output() onDataSelect = new EventEmitter();

  constructor() { 
  }

  ngOnInit(): void {
  }

  emitSelectedItem( item ) {
    this.onDataSelect.emit( item );
  }

}
