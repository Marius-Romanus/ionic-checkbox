import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  signinForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {

    this.signinForm = this.formBuilder.group({
      terms: [false, Validators.requiredTrue],
      termsOld: [false, Validators.requiredTrue],
    });
  }

  ngOnInit() {
    this.signinForm.controls['terms'].valueChanges.subscribe(value => {
      console.log("subscribe", value);
    });
    this.signinForm.controls['termsOld'].valueChanges.subscribe(value => {
      console.log("subscribe termsOld", value);
    });
  }

  signin(event: any) {
    event.preventDefault();
    console.log("submit", this.signinForm.controls?.['terms'].value);
    console.log("submit termsOld", this.signinForm.controls?.['termsOld'].value);
  }
}
