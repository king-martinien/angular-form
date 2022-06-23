import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginValidators } from './login.validators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  seePassword: boolean = false;
  form: FormGroup = new FormGroup({
    account: new FormGroup({
      login: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          loginValidators.cannotContainSpace,
        ],
        loginValidators.shouldBeUnique
      ),
      password: new FormControl('', Validators.required),
    }),
  });

  constructor() {}

  ngOnInit(): void {
    console.log(this.form);
  }

  get login() {
    return this.form.get('account.login');
  }

  get password() {
    return this.form.get('account.password');
  }

  onLogin() {
    this.form.setErrors({
      inValidLogin: true,
    });
  }

  showPassword() {
    let x = document.getElementById('password') as HTMLInputElement;
    if (x.type === 'password') {
      x.type = 'text';
      this.seePassword = true;
    } else {
      x.type = 'password';
      this.seePassword = false;
    }
  }
}
