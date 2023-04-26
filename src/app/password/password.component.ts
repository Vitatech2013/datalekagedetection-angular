import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  admin:any
  Pswd!:FormGroup;
    constructor(private adminservice:AdminService,private fb:FormBuilder,private router:Router){}
  
    
    ngOnInit(): void {
     this.admin = JSON.parse(localStorage.getItem('admin')!)
     this.Pswd =this.fb.group({
      userName:[this.admin.username,[Validators.required]],
      Pswd:['',[Validators.required]],
      npwd:['',[Validators.required]]
     });
    }
    
    get pwd(){
      return this.Pswd.get('pswd')
    }
    get npwd(){
     return this.Pswd.get('npswd')
   }
  submit(){
   let data={
    password:this.Pswd.value.npwd
   }
   if(this.Pswd.value.pwd == this.admin.password){
     this.adminservice.changepwd(this.admin._id,data).subscribe((res:any)=>{
      localStorage.removeItem('admin')
      this.router.navigate(['/dashboard/adminlogin'])
      alert('password changed suceesfully')
     })
   }else{
    alert('old password is not match')
   }
  }



  // pswd!: any;
  // npswd!:any;
  // admin: any;
  // constructor(private adminservice: AdminService, private fb: FormBuilder, private router: Router) { }
  // ngOnInit(): void {
  //   this.admin = JSON.parse(localStorage.getItem('admin')!)
  //   this.pswd = this.fb.group({
  //     userName: [this.admin.username, [Validators.required]],
  //     pswd: ['', [Validators.required]],
  //     npswd: ['', [Validators.required]]
  //   });
  // }
  // get Pswd() {
  //   return this.pswd.get('pswd')
  // }
  // get Npswd() {
  //   return this.npswd.get('npswd')

  // }
  // submit() {
  //   let data = {
  //     password: this.Pswd.value.npwd
  //   }
  //   if (this.Pswd.value.pswd == this.admin.password) {
  //     this.adminservice.changePswd(this.admin._id, data).subscribe((res: any) => {
  //       localStorage.removeItem('admin')
  //       this.router.navigate(['/dashboard/adminlogin'])
  //       alert('password changed suceesfully')
  //     })
  //   } else {
  //     alert('old password is not match')
  //   }
  // }

}
