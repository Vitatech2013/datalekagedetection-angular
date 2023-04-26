import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, } from '@angular/forms';

@Component({
  selector: 'app-distributor-login',
  templateUrl: './distributor-login.component.html',
  styleUrls: ['./distributor-login.component.css']
})
export class DistributorLoginComponent implements OnInit {
LoginForm!: FormGroup
  Userapi: any;
  router: any;
constructor(private fb: FormBuilder ){

}

  ngOnInit(): void {
    
  }
  login(){
    let email = this.LoginForm.get('username')?.value;
    let pswd = this.LoginForm.get('password')?.value;
    console.log(email,pswd,"sdfdgf");
    

    this.Userapi.UserLogin(email, pswd).subscribe((res:any)=> {


    console.log(res,'logins');

    if (res) {
      localStorage.setItem('token', JSON.stringify(res));
      this.router.navigate(['/user']);
    } else {
      alert('LOgin Failed');
    }
  })

}
}
