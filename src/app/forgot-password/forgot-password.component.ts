import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  seePassword: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  showPassword(field: HTMLInputElement) {
    let x = document.getElementById('password') as HTMLInputElement;
    if (field.type === 'password') {
      field.type = 'text';
      this.seePassword = !this.seePassword;
    } else {
      field.type = 'password';
      this.seePassword = !this.seePassword;
    }
  }
}
