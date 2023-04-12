import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  LoginForm!: FormGroup
  constructor(private fb: FormBuilder, private Userapi: UserService , private router: Router) {

  }

  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username: [''],
      password: ['']

    })

  }
  login() {
    let email = this.LoginForm.get('username')?.value;
    let pswd = this.LoginForm.get('password')?.value;
    console.log(email,pswd,"sdfdgf");
    

    this.Userapi.UserLogin(email, pswd).subscribe((res:any)=> {


    console.log(res,'logins');

    if (res) {
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['/user']);
    } else {
      alert('failed');
    }
  });
  }
}
