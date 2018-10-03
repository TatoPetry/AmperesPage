import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthModel } from '../../core/interfaces/authmodel';
import { AuthService } from '../../core/sevices/auth.service';
import { User } from 'firebase';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  authModel: AuthModel;

  constructor(
    private fb: FormBuilder,
    public afa: AuthService
    ) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async login() {
    const email: string = this.formLogin.get('email').value;
    const password: string = this.formLogin.get('password').value;
    console.log(email, password);
    this.authModel = { email: email, password: password };
    await this.afa.emailLogin(this.authModel);
    this.formLogin.reset();
  }

  async logout() {
    await this.afa.signOut();
  }


}
