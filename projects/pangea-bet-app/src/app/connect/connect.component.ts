import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'pangea-bet-connect',
  templateUrl: './connect.component.html',
  styles: [
  ]
})
export class ConnectComponent implements OnInit {

  connectForm: FormGroup;

  get ip(): any { return this.connectForm.get('ip'); }

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.connectForm = this.formBuilder.group({
      ip: ['', [
        Validators.required
      ]],
    });
  }

  ngOnInit(): void {
  }

  OnConnect(): void {
    if (this.connectForm.valid) {

    }
  }

}
