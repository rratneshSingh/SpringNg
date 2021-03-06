import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @Input() data;
  @Output() onDataSelect = new EventEmitter();

  signUpForm: FormGroup = null;

  user = null;

  constructor() { 
  }

  ngOnInit(): void {
    this.getUser();
    this.signUpForm = new FormGroup({
      name: new FormControl('',  [Validators.required] ),
      email: new FormControl('', [ Validators.email, Validators.required ] ),
      password: new FormControl('', [ Validators.required, Validators.minLength( 8 ) ] )
    });
    if ( this.user ) {
      this.signUpForm.patchValue( {
        name: 'Ratnesh'
      } );
      this.markAsTouched();
    }
    // this.signUpForm.get('name').valueChanges.subscribe(( value ) => {
    //   if ( value.trim() ){
    //     this.signUpForm.get('email').setValidators( [] );
    //     this.signUpForm.get('email').updateValueAndValidity();
    //   } else {
    //     this.signUpForm.get('email').setValidators(  [ Validators.email, Validators.required ] );
    //     this.signUpForm.get('email').updateValueAndValidity();   
    //   }
    // })
  }

  getUser() {
    const user = JSON.parse( localStorage.getItem('signUpData') );
    this.user = user;
  }

  markAsTouched(){
    this.signUpForm.get('name').markAsTouched();
  }

  emitSelectedItem( item ) {
    this.onDataSelect.emit( item );
  }

  signUp() {
    console.log(this.signUpForm.value);
    localStorage.setItem('signUpData', JSON.stringify( this.signUpForm.value ) );
  }

  get nameFC(){
    return this.signUpForm.get('name');
  }

  get passwordFC() {
    return this.signUpForm.get('password');
  }

}
